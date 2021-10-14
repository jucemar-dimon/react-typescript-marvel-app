import React, { FormEvent, useEffect, useState } from "react";
import { HiUserGroup, HiOutlineBookOpen } from "react-icons/hi";

import { SearchType } from "../../types";
import { Container } from "./styles";

interface ISearchTypeButtonProps {
    handleSearchType: (type: SearchType) => void;
    data: SearchType | undefined;
}

const SearchTypeButton = (props: ISearchTypeButtonProps): JSX.Element => {
    const { handleSearchType, data } = props;
    const [clicked, setClicked] = useState<string>();

    useEffect(() => {
        const searchTypeClicked = clicked as SearchType;
        handleSearchType(searchTypeClicked);
    }, [clicked]);

    return (
        <Container>
            <button type="button" onClick={() => setClicked("characters")}>
                <HiUserGroup
                    title="Search by Character"
                    className="icon"
                    size="1.5rem"
                    color={data === "characters" ? "#EC1D24" : "#ffffff"}
                />
                <span>CHARACTER</span>
            </button>
            <button type="button" onClick={() => setClicked("comics")}>
                <HiOutlineBookOpen
                    title="Search by Comics"
                    size="1.5rem"
                    color={data === "comics" ? "#EC1D24" : "#ffffff"}
                />
                <span>COMICS</span>
            </button>
        </Container>
    );
};

export default SearchTypeButton;
