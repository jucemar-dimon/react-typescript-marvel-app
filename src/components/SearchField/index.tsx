import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

import useDebounce from "../../hooks/useDebounce";
import { Container } from "./styles";

interface ISearchProps {
    value: string;
    onchange: (searchText: string) => void;
    handleClear: () => void;
}

export default function SearchField({
    value,
    onchange,
    handleClear,
}: ISearchProps) {
    const DEBOUNCE_TIME = 3000;
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onchange, DEBOUNCE_TIME);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDisplayValue(event.currentTarget.value);
        debouncedChange(event.currentTarget.value);
    }

    const searchClear = () => {
        handleClear();
        setDisplayValue("");
    };

    return (
        <Container>
            <input
                placeholder="Enter your search keyword"
                aria-label="Search for marvel character or comics"
                type="text"
                value={displayValue}
                onChange={handleChange}
            />
            {displayValue && displayValue.length > 0 && (
                <Link to="/" onClick={searchClear}>
                    <HiX size="1.5rem" color="#fff" />
                </Link>
            )}
        </Container>
    );
}
