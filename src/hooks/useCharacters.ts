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
    results: [ICharacter];
}

interface ICharacter {
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

export function useCharacters(
    query: string,
    pageLimit: number
): {
    characters: ICharacter[];
    getCharacters: (page: number) => void;
    totalPages: number;
    setCharacters: (characters: ICharacter[]) => void;
} {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    function getCharacters(page: number) {
        const currentOffset = page < 2 ? 0 : (page - 1) * pageLimit;
        api.get(`/characters`, {
            params: {
                nameStartsWith: query,
                offset: currentOffset,
            },
        }).then((response: AxiosResponse) => {
            const apiResponse: IResponse = response.data;
            console.log("response", apiResponse.data);

            const calcTotalPages = Math.ceil(
                apiResponse.data.total / pageLimit
            );

            setTotalPages(calcTotalPages);
            setCharacters(apiResponse.data.results);
        });
    }
    return { characters, getCharacters, totalPages, setCharacters };
}