import React, { useEffect, useState } from "react";
import { HiUserGroup, HiOutlineBookOpen } from "react-icons/hi";
import { Link } from "react-router-dom";

import { SearchType } from "../../types";
import { Container } from "./styles";

interface ISearchTypeButtonProps {
    handleSearchType: (type: SearchType) => void;
    data: SearchType | undefined;
}

const SearchTypeButton = (props: ISearchTypeButtonProps): JSX.Element => {
    const { handleSearchType, data } = props;
    const [clicked, setClicked] = useState<string>("");

    useEffect(() => {
        const searchTypeClicked = clicked as SearchType;
        handleSearchType(searchTypeClicked);
    }, [clicked]);

    return (
        <Container>
            <Link to="characters" onClick={() => setClicked("characters")}>
                <HiUserGroup
                    title="Search by Character"
                    className="icon"
                    size="1.5rem"
                    color={data === "characters" ? "#EC1D24" : "#ffffff"}
                />
                <span>CHARACTER</span>
            </Link>
            <Link to="comics" onClick={() => setClicked("comics")}>
                <HiOutlineBookOpen
                    title="Search by Comics"
                    size="1.5rem"
                    color={data === "comics" ? "#EC1D24" : "#ffffff"}
                />
                <span>COMICS</span>
            </Link>
        </Container>
    );
};

export default SearchTypeButton;
