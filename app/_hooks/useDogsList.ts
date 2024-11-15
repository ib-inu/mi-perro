'use client';;
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchDogData } from "@/app/api/dogsApi";



function useDogsList(query: string) {
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 2000);
        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    return useQuery(["dogs", debouncedQuery], () => fetchDogData(debouncedQuery), {
        enabled: !!debouncedQuery,
        retry: false
    });
}

export default useDogsList;