import { AiFillHome } from "react-icons/ai";
import { IMenuData } from "./menu.interface";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { SiEventbrite } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";

export const menu: IMenuData[] = [
    {
        link: "/",
        title: "Главная",
        icon: AiFillHome,
    },
    {
        link: "/mapEvents",
        title: "Искать на карте",
        icon: SiEventbrite,
    },
    {
        link: "/nextevents",
        title: "Ближайшие мероприятия",
        icon: BsFillCalendar2EventFill,
    },
    {
        link: "/searchFriends",
        title: "Поиск друзей",
        icon: FaUserFriends,
    },
    {
        link: "/proccess",
        title: "Как это работает",
        icon: FcAbout,
    },
];
