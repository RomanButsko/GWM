import { ILoader } from "./Image-loader.interface";

export const myLoader = ({ src }: ILoader) => {
    return `http://localhost:7500${src}`;
};
