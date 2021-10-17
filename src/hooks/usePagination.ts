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
    const [typeOfSearch, setTypeOfSearch] = useState("");
    const [queryOfSearch, setQueryOfSearch] = useState("");

    function clearURL() {
        /*  const queryParamns = qs.exclude(keys: { page );
        history.push({
            search: "",
        }); */
    }

    useEffect(() => {
        console.log("location", history);

        const queryParamns = qs.parse(location.search);
        if (queryOfSearch.length > 0) {
            history.push({
                search: qs.stringify({
                    ...queryParamns,
                    query: queryOfSearch,
                    page: actualPage,
                }),
            });
        }
    }, [actualPage]);

    return { setActualPage, actualPage, clearURL, setQueryOfSearch };
}
