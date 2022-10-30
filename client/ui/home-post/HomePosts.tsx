import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FC, useState } from "react";
import { GrFormView } from "react-icons/gr";
import { api } from "../../store/api/api";
import { IPost } from "../../types/post.type";
import { Button } from "../button/Button";
import UserAvatar from "../user-avatar/UserAvatar";
import ActiveUser from "./activeUser/ActiveUser";
import style from "./HomePosts.module.sass";

const HomePosts: FC<IPost> = ({
    title,
    description,
    date,
    picture,
    location,
    id,
    views,
    userId,
    joinUser,
}) => {
    const [activePost, setActivePost] = useState<
        "reject" | "join" | "mypost"
    >();
    const [joinedUser, setJoinedUser] = useState<number>(0);

    const router = useRouter();

    const { data } = api.useGetProfileQuery();
    const [joinToEvent] = api.useJoinToEventMutation();
    const [leaveEvent] = api.useLeaveEventMutation();

    useEffect(() => {
        if (userId !== data?.id) {
            data?.joinPost?.find((idPost) => idPost === id)
                ? setActivePost("join")
                : setActivePost("reject");
        } else if (userId === data?.id) {
            setActivePost("mypost");
        }
    }, [data]);

    const handlJoinToEvent = () => {
        joinToEvent({ id: String(id) });
    };

    const handleLeave = () => {
        leaveEvent({ id: String(id) });
    };

    return (
        <div className={style.block}>
            {id && (
                <>
                    <div className={style.block_title}>
                        <Link href={`posts/${id}`}>
                            <a className={style.block_title__link}>{title}</a>
                        </Link>
                        <p>{description}</p>
                    </div>
                    <div className={style.block_body}>
                        <span>Место проведения {location}</span>
                        <span className={style.block_body__views}>
                            <GrFormView fontSize={22} /> {views || 0}
                        </span>
                    </div>
                    <Link href={`posts/${id}`}>
                        <a className={style.block_body__infBtn}>
                            Узнать больше...
                        </a>
                    </Link>
                    <div className={style.block_footer}>
                        <>
                            {userId && (
                                <div
                                    className={style.block_footer__user}
                                    onClick={() => router.push(`profile/${id}`)}
                                >
                                    <UserAvatar id={userId} />
                                </div>
                            )}
                            <div className={style.block_footer__userAvatar}>
                                {joinUser && (
                                    <div>
                                        {joinUser.map((userId) => {
                                            return (
                                                <ActiveUser
                                                    userId={userId}
                                                    joinedUser={joinedUser}
                                                    setJoinedUser={
                                                        setJoinedUser
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                            {activePost === "join" ? (
                                <Button
                                    className={style.block_footer__joinBtn}
                                    onClick={handleLeave}
                                >
                                    Покинуть встречу
                                </Button>
                            ) : activePost === "reject" ? (
                                <Button
                                    className={style.block_footer__joinBtn}
                                    onClick={handlJoinToEvent}
                                >
                                    Присоединиться
                                </Button>
                            ) : activePost === "mypost" ? (
                                <div>Мой пост</div>
                            ) : (
                                <div></div>
                            )}
                        </>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomePosts;
