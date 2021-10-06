import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import { api } from "../../services/api";
import { Container, Card } from "./styles";

interface ICharacter {
    name: string;
    description: string;
    thumbnail: {
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

const Body: React.FC = () => {
    const [characters, setCharacters] = useState<[ICharacter]>();

    useEffect(() => {
        api.get(`/characters`, { params: { nameStartsWith: "wol" } }).then(
            (response: AxiosResponse) => {
                const apiResponse: IResponse = response.data;
                setCharacters(apiResponse.data.results);
                console.log("characters", characters);
            }
        );
    }, []);

    const renderList = () => {
        return characters?.map((character) => (
            <Card key={character.name}>
                {character.thumbnail && (
                    <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={`Imagem do personagem ${character.name}`}
                    />
                )}
                <p>{character.name}</p>
            </Card>
        ));
    };

    return <Container>{renderList()}</Container>;
};

export default Body;
