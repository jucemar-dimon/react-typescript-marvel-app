import qs from "query-string";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export function useQueryOnURL(): {
    setParamQuery: (query: string) => void;
    setParamPath: (path: string) => void;
    clearSearch: () => void;
    setParamOrderBy: (order: string) => void;
} {
    const history = useHistory();
    const [paramQuery, setParamQuery] = useState("");
    const [paramPath, setParamPath] = useState("");
    const [paramOrderBy, setParamOrderBy] = useState("");

    const clearSearch = () => {
        setParamPath("");
        setParamQuery("");
        setParamOrderBy("");
        history.push("");
    };

    useEffect(() => {
        if (paramPath.length > 0) {
            history.push({
                pathname: paramPath,
            });
        }
    }, [paramPath]);

    const buildOrderName = (path: string) => {
        if (path.includes("characters")) {
            return "orderByCharacterName";
        }

        return "orderByComicTitle";
    };

    useEffect(() => {
        if (paramQuery.length > 0 && paramPath.length > 0) {
            history.push({
                search: qs.stringify({
                    [buildOrderName(paramPath)]: paramOrderBy.includes("-")
                        ? "DSC"
                        : "ASC",
                    query: paramQuery,
                    page: 1,
                }),
            });
        }
    }, [paramQuery, paramPath, paramOrderBy]);

    return { clearSearch, setParamOrderBy, setParamPath, setParamQuery };
}
