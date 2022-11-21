import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FC, useState } from "react";
import { GrView } from "react-icons/gr";
import PostChat from "../../components/PostChat/PostChat";
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
    bckgPicture,
}) => {
    const [activePost, setActivePost] = useState<
        "reject" | "join" | "mypost"
    >();

    const [joinedUser, setJoinedUser] = useState<number>(0);

    const router = useRouter();

    const { data } = api.useGetProfileQuery();
    const { data: postUsers } = api.useFindJoinedUserPostQuery(String(id));
    const [joinToEvent] = api.useJoinToEventMutation();
    const [leaveEvent] = api.useLeaveEventMutation();

    useEffect(() => {
        if (userId !== data?.id) {
            console.log("первое");
            data?.joinPost?.find((idPost) => idPost === id)
                ? setActivePost("join")
                : setActivePost("reject");
        } else if (userId === data?.id) {
            setActivePost("mypost");
        }
    }, [data]);

    useEffect(() => {
        if (!postUsers?.joinUser) setJoinedUser(0);
        else {
            setJoinedUser(postUsers?.joinUser?.length);
        }
    }, [postUsers?.joinUser?.length]);

    const handlJoinToEvent = () => {
        joinToEvent({ id: String(id) });
        setActivePost("join");
    };

    const handleLeave = () => {
        leaveEvent({ id: String(id) });
        setActivePost("reject");
    };

    return (
        <div className={style.block}>
            {id && (
                <>
                    <div className={style.block_title}>
                        <Link href={`posts/${id}`}>
                            <a className={style.block_title__link}>{title}</a>
                        </Link>
                        <p className={style.block_title__descr}>
                            {description}
                        </p>
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
                            <GrView
                                fontSize={24}
                                style={{ backgroundColor: "white" }}
                            />
                            {views || 0}
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
                                {postUsers?.joinUser && (
                                    <div>
                                        {postUsers.joinUser.map(
                                            (userId, index) => {
                                                if (index < 3) {
                                                    return (
                                                        <ActiveUser
                                                            userId={userId}
                                                        />
                                                    );
                                                } else {
                                                    return (
                                                        <button>
                                                            и другие
                                                        </button>
                                                    );
                                                }
                                            }
                                        )}
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
