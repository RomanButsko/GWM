import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FC, useState } from "react";
import { GrFormView } from "react-icons/gr";
import PostChat from "../../components/PostChat/PostChattwo";
import { api } from "../../store/api/api";
import { IPost } from "../../types/post.type";
import { Button } from "../button/Button";
import AnimationModal from "../modal/AnimationModal";
import UserAvatar from "../user-avatar/general/UserAvatar";
import ActiveUser from "./activeUser/ActiveUser";
import JoinedUser from "./activeUser/JoinedUser";
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
    const [show, setIsShow] = useState<boolean>(false);
    const [joinedUser, setJoinedUser] = useState<number>(0);

    const [chat, setChat] = useState<boolean>(false);

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

    useEffect(() => {
        if (!joinUser) setJoinedUser(0);
        else {
            setJoinedUser(joinUser?.length);
        }
    }, [joinUser]);

    const handlJoinToEvent = () => {
        joinToEvent({ id: String(id) });
    };

    const handleLeave = () => {
        leaveEvent({ id: String(id) });
    };

    const handleChat = () => {
        setChat(true);
        setIsShow(true);
    };

    const closeChat = () => {
        setIsShow(false);
        setChat(false);
    };

    if (chat && data && data.id) {
        return (
            <AnimationModal
                opened={show}
                onClose={closeChat}
                windowView={"chat"}
            >
                <PostChat postId={id} title={title} userId={data.id} />
            </AnimationModal>
        );
    }
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
                        <span>
                            Место проведения
                            <span className={"ymaps-geolink"}>
                                {location &&
                                    location.split(",").slice(1).join()}
                            </span>
                        </span>
                        <span className={style.block_body__views}>
                            <GrFormView fontSize={22} /> {views || 0}
                        </span>
                    </div>
                    <Link href={`posts/${id}`}>
                        <a className={style.block_body__infBtn}>
                            Узнать больше...
                        </a>
                    </Link>
                    <button onClick={handleChat}>Перейти в чат</button>
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
                                        {joinUser.map((userId, index) => {
                                            if (index < 3) {
                                                return (
                                                    <ActiveUser
                                                        userId={userId}
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <button>и другие</button>
                                                );
                                            }
                                        })}
                                    </div>
                                )}
                                {<JoinedUser joinedUser={joinedUser} />}
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
