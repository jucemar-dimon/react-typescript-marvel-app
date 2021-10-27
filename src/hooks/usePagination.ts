import qs from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

export function usePagination() {
    const location = useLocation();
    const history = useHistory();

    function getCurrentPage() {
        const queryParamns = qs.parse(location.search);
        const { page } = queryParamns;
        return page ? Number(page) : undefined;
    }

    const [currentPage, setCurrentPage] = useState(getCurrentPage() || 1);

    useEffect(() => {
        const queryParamns = qs.parse(location.search);
        if (currentPage) {
            history.push({
                search: qs.stringify({
                    ...queryParamns,
                    page: currentPage,
                }),
            });
        }
    }, [currentPage]);

    return { setCurrentPage, currentPage };
}
