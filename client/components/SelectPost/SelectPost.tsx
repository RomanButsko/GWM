import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FC } from "react";
import { AiFillEye } from "react-icons/ai";
import { myLoader } from "../../loader/Image-loader";
import { api } from "../../store/api/api";
import { IPost } from "../../types/post.type";
import YandexMap from "../../ui/map/Map";
import AnimationModal from "../../ui/modal/AnimationModal";
import UserAvatar from "../../ui/user-avatar/general/UserAvatar";
import PostChat from "../PostChat/PostChat";
import style from "./SelectPost.module.sass";

const SelectPost: FC<IPost> = ({
    title,
    description,
    date,
    userId,
    views,
    picture,
    location,
    id,
}) => {
    const { data: user } = api.useGetProfileQuery();
    const { data: pointers } = api.useGetExactPointerQuery(id);
    console.log(pointers);
    const [chat, setChat] = useState<boolean>(false);
    const [show, setIsShow] = useState<boolean>(false);
    const handleChat = () => {
        setChat(true);
        setIsShow(true);
    };

    const closeChat = () => {
        setIsShow(false);
        setChat(false);
    };

    if (chat && user && user.id) {
        return (
            <AnimationModal
                opened={show}
                onClose={closeChat}
                windowView={"chat"}
            >
                <PostChat postId={id} title={title} userId={user.id} />
            </AnimationModal>
        );
    }
    const router = useRouter();
    return (
        <div className={style.post}>
            <button type="button" onClick={() => router.push("/")}>
                На главную
            </button>
            <button type="button" onClick={() => router.back()}>
                Перейти к прошлому мероприятию
            </button>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <div>
                <AiFillEye />
                {views}
            </div>
            <div>{location}</div>
            <span>Фото с предстоящего мероприятия</span>
            {picture && (
                <Image
                    loader={myLoader}
                    src={picture}
                    width="100%"
                    height="100%"
                />
            )}
            <div>{<UserAvatar id={userId} />}</div>
            <button onClick={handleChat}>Перейти в чат</button>
            <YandexMap
                post={"post"}
                width={"900px"}
                height={"400px"}
                clusterPoints={pointers}
            />
        </div>
    );
};

export default SelectPost;
