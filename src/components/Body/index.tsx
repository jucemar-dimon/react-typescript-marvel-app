import { AxiosResponse } from "axios";
import qs from "query-string";
import React, { useEffect, useState, memo } from "react";
import { HiX } from "react-icons/hi";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";

import { useCharacters } from "../../hooks/useCharacters";
import { usePagination } from "../../hooks/usePagination";
import { useQueryOnURL } from "../../hooks/useQueryOnURL";
import { api } from "../../services/api";
import { SearchType } from "../../types";
import Pagination from "../Pagination";
import SearchTypeButton from "../SearchTypeButton";
import { Container, Card } from "./styles";

interface IRouterParam {
    type: string;
}

interface ICharacter {
    id: number;
    name?: string;
    title?: string;
    thumbnail?: {
        path: string;
        extension: string;
    };
}

export const Body = (): JSX.Element => {
    const SEARCH_TYPE_CHARACTER = "characters";
    const SEARCH_TYPE_COMICS = "comics";
    const [query, setQuery] = useState<string>("");

    const { type } = useParams<IRouterParam>();

    const [searchType, setSearchType] = useState<SearchType>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { characters, getCharacters, totalPages, setCharacters } =
        useCharacters(query, 10);
    const { currentPage, setCurrentPage } = usePagination();
    const { setActualQuery, setActualPath, clearSearch } = useQueryOnURL();

    useEffect(() => {
        if (searchType && searchType.includes(SEARCH_TYPE_CHARACTER)) {
            getCharacters(currentPage);

            setActualQuery(query);
        }
    }, [query, currentPage, searchType]);

    useEffect(() => {
        setActualQuery(query);
    }, [type]);

    const handleSearchType = (type: SearchType) => {
        setSearchType(type);
        setActualPath(type);
        setCurrentPage(1);
    };

    const handleClear = () => {
        setSearchType("");
        setQuery("");
        setCharacters([]);
        clearSearch();
    };

    function isInputDisabled() {
        if (
            searchType !== SEARCH_TYPE_CHARACTER &&
            searchType !== SEARCH_TYPE_COMICS
        ) {
            return true;
        }

        return false;
    }

    const renderList = () => {
        return characters?.map((character) => (
            <Card key={character.id}>
                {character.thumbnail && (
                    <div>
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={`Imagem do personagem ${character.name}`}
                        />
                    </div>
                )}
                <div className="title">
                    <strong>{character.name}</strong>
                </div>
            </Card>
        ));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value);
        setActualQuery(event.currentTarget.value);
        console.log("QUERY", query);
    };

    return (
        <Container isLoading={loading}>
            <div className="search-form">
                <div className="search-field">
                    <input
                        disabled={isInputDisabled()}
                        value={query}
                        onChange={handleChange}
                        type="text"
                        name="search"
                        id="search-field"
                    />
                    {query && query.length > 0 && (
                        <Link to="/" onClick={handleClear}>
                            <HiX size="1.5rem" color="#fff" />
                        </Link>
                    )}
                </div>
                <SearchTypeButton
                    handleSearchType={handleSearchType}
                    data={searchType}
                />
            </div>

            <div className="result-area">
                <div className="result-list">
                    {renderList()}
                    <div className="loading-list">{loading && "LOADING"}</div>
                </div>

                {characters.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </div>
        </Container>
    );
};

export default memo(Body);
