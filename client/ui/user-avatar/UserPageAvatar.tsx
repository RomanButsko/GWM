import React from "react";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { IMediaResponse } from "../../../server/src/media/media.interface";
import { api } from "../../store/api/api";
import UploadField from "../upload-field/UploadField";

const UserPageAvatar: FC<{ id: number }> = ({ id }) => {
    const { control } = useForm<{ picture: string }>({
        shouldUseNativeValidation: true,
        mode: "onChange",
    });

    const [changeAvatar] = api.useChangeUserAvatarMutation();

    const onSubmit = (value: string) => {
        changeAvatar({ data: { avatarPath: value }, id: id });
        return value;
    };
    return (
        <div>
            <Controller
                control={control}
                name="picture"
                render={({ field: { onChange } }) => (
                    <UploadField
                        title={"Сменить фото"}
                        onChange={(value: IMediaResponse) =>
                            onChange(onSubmit(value.url))
                        }
                        folder="user-avatar"
                        id={id}
                    />
                )}
            />
        </div>
    );
};

export default UserPageAvatar;
