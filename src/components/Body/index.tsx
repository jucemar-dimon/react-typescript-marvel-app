import { AxiosResponse } from "axios";
import qs from "query-string";
import React, { useEffect, useState, memo } from "react";
import { HiX } from "react-icons/hi";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";

import { useEntities } from "../../hooks/useEntities";
import { usePagination } from "../../hooks/usePagination";
import { useQueryOnURL } from "../../hooks/useQueryOnURL";
import { api } from "../../services/api";
import { SearchType, IEntity } from "../../types";
import Pagination from "../Pagination";
import SearchTypeButton from "../SearchTypeButton";
import { Container, Card } from "./styles";

interface IRouterParam {
    type: string;
}

export const Body = (): JSX.Element => {
    const SEARCH_TYPE_CHARACTER = "characters";
    const SEARCH_TYPE_COMICS = "comics";
    const ASC_ORDER = "";
    const DES_ORDER = "-";
    const [query, setQuery] = useState<string>("");

    const { type } = useParams<IRouterParam>();

    const [searchType, setSearchType] = useState<SearchType>("");

    const {
        entities,
        getEntities,
        totalPages,
        setEntities,
        totalEntities,
        orderBy,
        setOrderBy,
    } = useEntities(query, searchType, 10);
    const { currentPage, setCurrentPage } = usePagination();
    const { setActualQuery, setActualPath, clearSearch } = useQueryOnURL();

    useEffect(() => {
        getEntities(currentPage);
    }, [query, currentPage, searchType, orderBy]);

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
        setEntities([]);
        clearSearch();
        setOrderBy(ASC_ORDER);
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
    function generatorBadgeType(entity: IEntity) {
        return entity.name ? "CHARACTER" : "COMIC";
    }

    const renderList = () => {
        return entities?.map((entity) => (
            <Card key={entity.id}>
                {entity.thumbnail && (
                    <div>
                        <img
                            src={`${entity.thumbnail.path}.${entity.thumbnail.extension}`}
                            alt={`Imagem do personagem ${entity.name}`}
                        />
                    </div>
                )}

                <strong>{entity.name || entity.title}</strong>
                <small>{generatorBadgeType(entity)}</small>
            </Card>
        ));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value);
        setActualQuery(event.currentTarget.value);
        console.log("QUERY", query);
    };

    const toogleOrderBy = () => {
        setOrderBy(orderBy === ASC_ORDER ? DES_ORDER : ASC_ORDER);
    };

    return (
        <Container isLoading={false}>
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
                    orderBy={orderBy}
                    toogleOrderBy={toogleOrderBy}
                />
            </div>

            <div className="result-area">
                <div className="result-list">
                    {renderList()}
                    <div className="loading-list">{false && "LOADING"}</div>
                </div>
                <div className="footer">
                    <div className="total-results">
                        <strong>
                            Foram encontradas {totalEntities} ocorrências
                        </strong>
                    </div>

                    {entities.length > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default memo(Body);
