import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMediaResponse } from "../../../server/src/media/media.interface";
import useAuth from "../../hooks/useAuth";
import UploadField from "../upload-field/UploadField";

const UserPageAvatar = (id) => {
    const { control } = useForm<{ picture: string }>({
        shouldUseNativeValidation: true,
        mode: "onChange",
    });

    const { user } = useAuth();

    const onSubmit = (value: string) => {
        user && (user.avatarPath = value);
        console.log("value", user?.avatarPath);
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
