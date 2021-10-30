import { AxiosResponse } from "axios";
import { useState } from "react";

import { api } from "../services/api";

interface IImage {
    // The directory path of to the image.,
    path?: string;
    // The file extension for the image.
    extension: string;
}

interface IData {
    limit: number;
    total: number;
    count: number;
    results: [IEntity];
}

interface IReturnedProps {
    entities: IEntity[];
    getEntities: (page: number) => void;
    totalPages: number;
    totalEntities: number;
    setEntities: (entities: IEntity[]) => void;
    orderBy: string;
    setOrderBy: (order: string) => void;
}

interface IEntity {
    // The unique ID of the character resource.,
    id?: number;
    // The name of the character.,
    name?: string;
    // A short bio or description of the character.,
    description: string;
    // The date the resource was most recently modified.,
    modified?: Date;
    // The representative image for this character.,
    thumbnail?: IImage;
}

interface IResponse {
    code: number;
    status: string;
    data: IData;
}

export function useEntities(
    query: string,
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
