import React, { useState, useEffect } from "react";

export type ResultJson = {
    id: string,
    user_email: string,
    film_id: string
}

type FetchResultsHookResult = {
    error: boolean,
    loading: boolean,
    jsonResponse: ResultJson[] | undefined;
}

const useFavorites = (): FetchResultsHookResult => {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [jsonResponse, setJsonResponse] = useState<ResultJson[] | undefined>(undefined);

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        try {


            const localhost = "192.168.149.225";
            const url = `http://${localhost}:3000/favorites`;



            console.log("START connect Server^^^^^^^^^^^^");
            const response = await fetch(url);

            console.log("------------");
            console.log(response);
            console.log("------------");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();

            console.log("============");
            console.log(json);
            console.log("============");

            setJsonResponse(json);
        } catch (error) {
            console.error("Error occurred during fetch:", error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return { error, loading, jsonResponse };

}


export default useFavorites;
