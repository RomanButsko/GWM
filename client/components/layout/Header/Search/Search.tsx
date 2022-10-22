import { useEffect } from "react";
import { ChangeEvent } from "react";
import { useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import { api } from "../../../../store/api/api";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const { data } = api.useGetFindAllPostsQuery();
    const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    // useEffect(() => {
    //     const results = data.filter((post) =>
    //         post.toLowerCase().includes(searchTerm)
    //     );
    //     setSearchResults(results);
    // }, [searchTerm]);

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
