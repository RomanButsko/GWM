export interface IUploadField {
    title: string;
    onChange: (...event: any) => any;
    folder?: string;
    id: number;
    showBottomPhoto: boolean;
    typeField?: string;
}

export interface IStateType {
    name: string;
    preview: string;
}
