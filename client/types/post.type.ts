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
}

export interface IPostIdProps {
    post: IPost;
}
