export interface IUploadField {
    title: string;
    onChange: (...event: any) => any;
    folder?: string;
    id: number;
}

export interface IStateType {
    name: string;
    preview: string;
}
