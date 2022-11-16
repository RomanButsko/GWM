import React, { useState } from "react";
import { AddressSuggestions } from "react-dadata";
import { DaDataSuggestion, DaDataAddress } from "react-dadata";
import style from "./SearchAdress.module.sass";
import "react-dadata/dist/react-dadata.css";
import { FC } from "react";
import { values } from "lodash";
import { Field } from "../field/Fields";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { IMapPointer } from "../../components/CreatePost/createPost.interface";

interface ISearchAdress {
    onChange?: (address: string) => void;
    setMapPointer: Dispatch<SetStateAction<IMapPointer>>;
}

const SearchAdress: FC<ISearchAdress> = ({ onChange, setMapPointer }) => {
    const [place, setPlace] = useState<
        DaDataSuggestion<DaDataAddress> | undefined
    >();

    const handlePlace = (
        value: DaDataSuggestion<DaDataAddress> | undefined
    ) => {
        if (value && onChange) {
            onChange(value.value);
            setPlace(value);
            setMapPointer([+value.data.geo_lat, +value.data.geo_lon]);
        }
    };
    return (
        <AddressSuggestions
            token="9598fe121798127836342dcf244e7fe8432f5e11"
            inputProps={{
                placeholder:
                    "Введите адрес мероприятия или укажите на карте 👉",
            }}
            count={8}
            value={place}
            onChange={(value: DaDataSuggestion<DaDataAddress> | undefined) =>
                handlePlace(value)
            }
            suggestionsClassName={style.modal}
            filterLocations={[
                {
                    country: "Беларусь",
                },
            ]}
        />
    );
};

export default SearchAdress;
