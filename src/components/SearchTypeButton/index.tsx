import React, { useEffect, useState } from "react";
import {
    HiUserGroup,
    HiOutlineBookOpen,
    HiSortAscending,
    HiSortDescending,
} from "react-icons/hi";
import { Link } from "react-router-dom";

import { SearchType } from "../../types";
import { Container } from "./styles";

interface ISearchTypeButtonProps {
    handleSearchType: (type: SearchType) => void;
    data: SearchType | undefined;
    orderBy: string;
    toogleOrderBy: () => void;
}

const SearchTypeButton = (props: ISearchTypeButtonProps): JSX.Element => {
    const { handleSearchType, data, orderBy, toogleOrderBy } = props;

    return (
        <Container>
            <button
                type="button"
                onClick={() => handleSearchType("characters")}
            >
                <HiUserGroup
                    title="Search by Character"
                    className="icon"
                    size="2rem"
                    color={data === "characters" ? "#EC1D24" : "#ffffff"}
                />
                <span>CHARACTER</span>
            </button>
            <button type="button" onClick={() => handleSearchType("comics")}>
                <HiOutlineBookOpen
                    title="Search by Comics"
                    size="2rem"
                    color={data === "comics" ? "#EC1D24" : "#ffffff"}
                />
                <span>COMICS</span>
            </button>
            <button type="button" onClick={() => toogleOrderBy()}>
                {orderBy === "" && (
                    <>
                        <HiSortAscending
                            title="Ascendent Order"
                            size="2rem"
                            color="#ffffff"
                        />
                        <span>ORDER</span>
                    </>
                )}
                {orderBy === "-" && (
                    <>
                        <HiSortDescending
                            title="Descendents Order"
                            size="2rem"
                            color="#EC1D24"
                        />
                        <span>ORDER</span>
                    </>
                )}
            </button>
        </Container>
    );
};

export default SearchTypeButton;
