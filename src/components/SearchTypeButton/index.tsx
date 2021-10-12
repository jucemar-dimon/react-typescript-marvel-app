import React, { FormEvent } from "react";

import { SearchType } from "../../types";
import { Container } from "./styles";

interface ISearchTypeButtonProps {
    handleSearchType: (type: SearchType) => void;
}

const SearchTypeButton = (props: ISearchTypeButtonProps): JSX.Element => {
    const { handleSearchType } = props;

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const searchTypeSelected = event.currentTarget.value as SearchType;
        handleSearchType(searchTypeSelected);
    };

    return (
        <Container>
            <div>
                <input
                    type="radio"
                    name="search-type"
                    id="character"
                    value="characters"
                    onChange={handleChange}
                />
                <span>CHARACTER</span>
            </div>
            <div>
                <input
                    type="radio"
                    name="search-type"
                    id="comics"
                    value="comics"
                    onChange={handleChange}
                />
                <span>COMICS</span>
            </div>
        </Container>
    );
};

export default SearchTypeButton;
