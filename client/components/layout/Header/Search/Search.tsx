import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import style from "./Search.module.sass";
import SearchItem from "./searchItem/SearchItem";
import { useSearch } from "./useSearch";

const Search = () => {
    const { searchTerm, searchResults, handleChange, setSearchTerm } =
        useSearch();
    return (
        <div className={style.search}>
            <div className={style.search_block}>
                <BsSearch />
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    className={style.search_block__input}
                />
            </div>
            <ul>
                {searchTerm &&
                    searchResults.map((item) => (
                        <SearchItem post={item} setSearchTerm={setSearchTerm} />
                    ))}
            </ul>
        </div>
    );
};

export default Search;
