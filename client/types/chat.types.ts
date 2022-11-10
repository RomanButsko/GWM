export interface IMessage {
    id: number;
    text: string;
    dialogID: number;
    userIdFrom: number;
    isRead: boolean;
    createdAt?: Date;
    updatedAt: Date;
}

export interface SendMessage
    extends Pick<IMessage, "text" | "dialogID" | "userIdFrom" | "isRead"> {}

export interface UpdateMessage {
    messageId: number;
    userId: number;
    text: string;
}
