export interface IPost extends IPostReq {
    id: number;
    views: number;
    userId: number;
    joinUser: number[];
}

export interface IPostReq {
    title: string;
    description: string;
    date: Date;
    picture: string;
    location: string;
    bckgPicture: string;
}

export interface IPostIdProps {
    post: IPost;
}

export interface IPostJoinUser {
    joinUser: number[] | null;
}
