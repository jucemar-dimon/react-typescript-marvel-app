import React, { useEffect, useState, memo } from "react";
import { HiX } from "react-icons/hi";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";

import { useEntities } from "../../hooks/useEntities";
import { usePagination } from "../../hooks/usePagination";
import { useQueryOnURL } from "../../hooks/useQueryOnURL";
import { SearchType, IEntity } from "../../types";
import Pagination from "../Pagination";
import SearchField from "../SearchField";
import SearchTypeButton from "../SearchTypeButton";
import { Container, Card } from "./styles";

interface IRouterParam {
    type: string;
}

export const Body = (): JSX.Element => {
    const QUERY_MIN_LENGTH = 0;

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
        if (query.length > QUERY_MIN_LENGTH && searchType.length > 0) {
            getEntities(currentPage);
        }
    }, [query, currentPage, searchType, orderBy]);

    useEffect(() => {
        setActualQuery(query);
    }, [type]);

    const handleChange = (searchString: string) => {
        setQuery(searchString);
        setActualQuery(searchString);
        console.log("QUERY", query);
    };

    const toogleOrderBy = () => {
        setOrderBy(orderBy === ASC_ORDER ? DES_ORDER : ASC_ORDER);
    };

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

    return (
        <Container isLoading={false}>
            <div className="search-form">
                <SearchField
                    value={query}
                    onchange={handleChange}
                    handleClear={handleClear}
                />
                {/*  <input
                        value={query}
                        onChange={handleChange}
                        type="text"
                        name="search"
                        id="search-field"
                    /> */}

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
                        {entities.length > 0 && (
                            <strong>
                                Foram encontradas {totalEntities} ocorrências
                            </strong>
                        )}
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
