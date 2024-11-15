"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { fetchDogData } from "../api/dogsApi";

type DogsContextType = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    dogsImage: string[],
    isLoading: boolean,
    error: string,

}


type DogsContextProviderProps = {
    children: ReactNode;
};

const DogsContext = createContext<DogsContextType | undefined>(undefined);


function DogsProvider({ children }: DogsContextProviderProps) {
    const [query, setQuery] = useState("");
    const [dogsImage, setDogsImage] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (query.length < 2) return;

        async function fetchDog() {
            try {
                setIsLoading(true);
                setError("");

                const res = await fetchDogData(query);

                setDogsImage(res);
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : "Something went wrong!";
                setError(errorMessage);
            } finally {
                setIsLoading(false);
            }
        }

        fetchDog();
    }, [query]);

    return (
        <DogsContext.Provider value={{
            query, setQuery, dogsImage, isLoading, error
        }}>
            {children}
        </DogsContext.Provider>
    );
}


function useDogs() {
    const context = useContext(DogsContext);
    if (context === undefined) throw new Error("DogsContext was used outside of the DogsProvider")
    return context
}

export { DogsProvider, useDogs };