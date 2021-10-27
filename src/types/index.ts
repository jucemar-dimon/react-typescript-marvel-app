export type SearchType = "characters" | "comics" | "";

export interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
}
