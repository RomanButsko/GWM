export interface ICreatePost {
    setIsShow: (arg0: boolean) => void;
}

export interface IMapPointers {
    geo_lat: number;
    geo_lon: number;
}

export interface IMapPointer extends Array<IMapPointers> {}
