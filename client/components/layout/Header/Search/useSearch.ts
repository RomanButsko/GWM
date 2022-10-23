import { useDebounce } from "./../../../../hooks/useDebounce";
import { IPost } from "./../../../../types/post.type";
import { useEffect, useState } from "react";
import { api } from "../../../../store/api/api";
import { ChangeEvent } from "react";

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<IPost[]>([]);

    const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

    const { data, ...rest } = api.useFindMyPostBySearchQuery(
        debouncedSearchTerm,
        {
            skip: !debouncedSearchTerm,
        }
    );

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        data && setSearchResults(data);
    }, [data]);

    return { setSearchTerm, searchTerm, searchResults, handleChange };
};
