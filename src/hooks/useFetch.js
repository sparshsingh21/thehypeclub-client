import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (endpoint, token="") => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint, token);
        setData(res);
    };

    return { data };
};
export default useFetch;
