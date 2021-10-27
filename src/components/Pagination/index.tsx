import React from "react";

import { IPaginationProps } from "../../types";
import { Container } from "./styles";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination: React.FC<IPaginationProps> = ({
    totalPages,
    currentPage,
    setCurrentPage,
}) => {
    const maxFirst = Math.max(totalPages - (MAX_ITEMS - 1), 1);
    const firstPage = Math.min(Math.max(currentPage - MAX_LEFT, 1), maxFirst);
    const handleClikPagination = (page: number) => {
        setCurrentPage(page);
    };

    function renderPagination() {
        return Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
            .map((_, index) => index + firstPage)
            .map((page) => {
                return (
                    <button
                        disabled={currentPage === page}
                        className="btn-page"
                        key={`page-${page}`}
                        type="button"
                        onClick={() => handleClikPagination(page)}
                    >
                        {page}
                    </button>
                );
            });
    }

    return (
        <Container>
            <button
                type="button"
                className="btn-prev"
                onClick={() => handleClikPagination(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </button>
            {renderPagination()}
            <button
                type="button"
                className="btn-next"
                onClick={() => handleClikPagination(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Próximo
            </button>
        </Container>
    );
};

export default Pagination;
