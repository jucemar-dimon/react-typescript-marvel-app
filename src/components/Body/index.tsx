import { AxiosResponse } from "axios";
import React, { useEffect, useState, memo } from "react";
import { HiX } from "react-icons/hi";

import { api } from "../../services/api";
import { SearchType } from "../../types";
import SearchTypeButton from "../SearchTypeButton";
import { Container, Card } from "./styles";

interface ICharacter {
    id: number;
    name?: string;
    title?: string;
    thumbnail?: {
        path: string;
        extension: string;
    };
}

interface IData {
    limit: number;
    total: number;
    count: number;
    results: [ICharacter];
}

interface IResponse {
    code: number;
    status: string;
    data: IData;
}

export const Body = (): JSX.Element => {
    const [characters, setCharacters] = useState<[ICharacter]>();
    const [query, setQuery] = useState<string>();
    const [searchType, setSearchType] = useState<SearchType>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const searchParameter =
            searchType === "comics" ? "titleStartsWith" : "nameStartsWith";

        if (query && query.length > 0 && searchType && searchType.length > 0) {
            setLoading(true);
            api.get(`/${searchType}`, {
                params: { [searchParameter]: query },
            }).then((response: AxiosResponse) => {
                const apiResponse: IResponse = response.data;

                setCharacters(apiResponse.data.results);
                console.log("characters", apiResponse.data.results);
                setLoading(false);
            });
        } else {
            setCharacters(undefined);
        }
    }, [query, searchType]);

    const handleClear = () => {
        setQuery("");
        setSearchType(undefined);
    };

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
                    <strong>{character.name || character.title}</strong>
                </div>
            </Card>
        ));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setQuery(event.target.value);
        setCharacters(undefined);
    };

    return (
        <Container display={loading}>
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
                        <button type="button" onClick={handleClear}>
                            <HiX size="2rem" color="#fff" />
                        </button>
                    )}
                </div>
                <SearchTypeButton
                    handleSearchType={setSearchType}
                    data={searchType}
                />
            </div>

            <div className="result-list">
                {renderList()}
                <div className="loading-list">{loading && "LOADING"}</div>
            </div>
        </Container>
    );
};

export default memo(Body);
