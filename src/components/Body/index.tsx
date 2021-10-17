import { AxiosResponse } from "axios";
import React, { useEffect, useState, memo } from "react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

import { useCharacters } from "../../hooks/useCharacters";
import { usePagination } from "../../hooks/usePagination";
import { api } from "../../services/api";
import { SearchType } from "../../types";
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

    const [searchType, setSearchType] = useState<SearchType>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { characters, getCharacters, totalPages, setCharacters } =
        useCharacters(query, 10);
    const { actualPage, setActualPage, clearURL, setQueryOfSearch } =
        usePagination();

    useEffect(() => {
        if (searchType && searchType.includes(SEARCH_TYPE_CHARACTER)) {
            getCharacters(actualPage);
        }
    }, [query, actualPage, searchType]);

    const handleClikPagination = (page: number) => {
        setActualPage(page);
    };

    const handleClear = () => {
        setSearchType("");
        setQuery("");
        setCharacters([]);
        setActualPage(1);
        clearURL();
    };

    function renderPagination() {
        if (characters.length > 0) {
            return Array(totalPages)
                .fill("")
                .map((_, index) => {
                    return (
                        <button
                            disabled={actualPage === index + 1}
                            className="btn-page"
                            key={`page-${index + 1}`}
                            type="button"
                            onClick={() => handleClikPagination(index + 1)}
                        >
                            {index + 1}
                        </button>
                    );
                });
        }

        return null;
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
        setQueryOfSearch(event.currentTarget.value);
        console.log("QUERY", query);
    };

    return (
        <Container isLoading={loading}>
            <div className="search-form">
                <div className="search-field">
                    <input
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
                    handleSearchType={setSearchType}
                    data={searchType}
                />
            </div>

            <div className="result-area">
                <div className="result-list">
                    {renderList()}
                    <div className="loading-list">{loading && "LOADING"}</div>
                </div>
                <div className="pagination">{renderPagination()}</div>
            </div>
        </Container>
    );
};

export default memo(Body);
