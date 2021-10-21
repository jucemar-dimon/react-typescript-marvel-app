import qs from "query-string";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export function useQueryOnURL() {
    const location = useLocation();
    const history = useHistory();

    const [actualQuery, setActualQuery] = useState("");
    const [actualPath, setActualPath] = useState("");

    const clearSearch = () => {
        setActualPath("");
        setActualQuery("");
        history.push("");
    };

    useEffect(() => {
        if (actualPath.length > 0) {
            history.push({
                pathname: actualPath,
            });
        }
    }, [actualPath]);

    useEffect(() => {
        if (actualQuery.length > 0) {
            history.push({
                search: qs.stringify({
                    query: actualQuery,
                    page: 1,
                }),
            });
        }
    }, [actualQuery]);

    return { setActualQuery, actualQuery, setActualPath, clearSearch };
}
