import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { GrFormView } from "react-icons/gr";
import { IPost } from "../../types/post.type";
import { Button } from "../button/Button";
import UserAvatar from "../user-avatar/UserAvatar";
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
}) => {
    const router = useRouter();

    return (
        <div className={style.block}>
            <div className={style.block_title}>
                <Link href={`posts/${id}`}>
                    <a className={style.block_title__link}>{title}</a>
                </Link>
                <p>{description}</p>
            </div>
            <div className={style.block_body}>
                <span>Место проведения {location}</span>
                <span className={style.block_body__views}>
                    <GrFormView fontSize={22} /> {views}
                </span>
            </div>
            <Link href={`posts/${id}`}>
                <a className={style.block_body__infBtn}>Узнать больше...</a>
            </Link>
            <div className={style.block_footer}>
                {userId && (
                    <div
                        className={style.block_footer__user}
                        onClick={() => router.push(`profile/${id}`)}
                    >
                        <UserAvatar id={userId} />
                    </div>
                )}
                <Button className={style.block_footer__joinBtn}>
                    Присоединиться
                </Button>
                <div></div>
            </div>
        </div>
    );
};

export default HomePosts;
