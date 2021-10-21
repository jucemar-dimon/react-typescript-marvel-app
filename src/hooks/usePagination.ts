import qs from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

export function usePagination() {
    const location = useLocation();
    const history = useHistory();

    function getActualPage() {
        const queryParamns = qs.parse(location.search);
        const { page } = queryParamns;
        return page ? Number(page) : undefined;
    }

    const [actualPage, setActualPage] = useState(getActualPage() || 1);

    useEffect(() => {
        const queryParamns = qs.parse(location.search);
        if (actualPage) {
            history.push({
                search: qs.stringify({
                    ...queryParamns,
                    page: actualPage,
                }),
            });
        }
    }, [actualPage]);

    return { setActualPage, actualPage };
}
