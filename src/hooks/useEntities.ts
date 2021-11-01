import { AxiosResponse } from "axios";
import { useState } from "react";

import { api } from "../services/api";
import { IReturnedProps, IEntity, IResponse } from "../types";

export function useEntities(
    query: string,
    setIsLoading: (status: boolean) => void,
    searchType: string,
    pageLimit: number
): IReturnedProps {
    const [entities, setEntities] = useState<IEntity[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalEntities, setTotalEntities] = useState<number>(0);
    const [orderBy, setOrderBy] = useState<string>("");

    function getEntities(page: number) {
        const currentOffset = page < 2 ? 0 : (page - 1) * pageLimit;
        const parameterOrderBy = searchType.includes("characters")
            ? `${orderBy}name`
            : `${orderBy}title`;
        const parameterForSearch = searchType.includes("characters")
            ? "nameStartsWith"
            : "titleStartsWith";
        api.get(`/${searchType}`, {
            params: {
                [parameterForSearch]: query,
                offset: currentOffset,
                orderBy: parameterOrderBy,
            },
        }).then((response: AxiosResponse) => {
            const apiResponse: IResponse = response.data;
            console.log("response", apiResponse.data);

            const calcTotalPages = Math.ceil(
                apiResponse.data.total / pageLimit
            );

            setTotalPages(calcTotalPages);
            setEntities(apiResponse.data.results);
            setTotalEntities(apiResponse.data.total);
            setIsLoading(false);
        });
    }
    return {
        entities,
        getEntities,
        totalPages,
        setEntities,
        totalEntities,
        orderBy,
        setOrderBy,
    };
}
