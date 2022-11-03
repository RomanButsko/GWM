import { ChangeEvent } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useOutside } from "../../../../hooks/useOutside";
import { MapService } from "../../../../services/map/map.service";
import style from "./Search.module.sass";
import SearchItem from "./searchItem/SearchItem";
import { useSearch } from "./useSearch";

const Search = () => {
    const { searchTerm, searchResults, handleChange, setSearchTerm } =
        useSearch();

    const { ref, isShow, setIsShow } = useOutside(true);
    return (
        <div className={style.search}>
            <div className={style.search_block}>
                <input
                    type="search"
                    placeholder="Поиск"
                    value={searchTerm}
                    onChange={handleChange}
                    className={style.search_block__input}
                    onClick={() => setIsShow(true)}
                />
                <BsSearch className={style.search_block__icon} />
            </div>
            {searchTerm && isShow && (
                <div className={style.search_results} ref={ref}>
                    <ul>
                        {searchResults.length ? (
                            searchResults.map((item) => (
                                <SearchItem
                                    post={item}
                                    setSearchTerm={setSearchTerm}
                                />
                            ))
                        ) : (
                            <span className={style.search_results__error}>
                                ничего не найдено
                            </span>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
