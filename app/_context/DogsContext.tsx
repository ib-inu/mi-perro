/* eslint-disable react/prop-types */
import { createContext, ReactNode, useContext, useState } from "react";
import useDogsList from "../hooks/useDogsList";

type DogsContextType = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    dogImages: string

}


type DogsContextProviderProps = {
    children: ReactNode;
};

const DogsContext = createContext<DogsContextType | undefined>(undefined);


function DogsProvider({ children }: DogsContextProviderProps) {
    const [query, setQuery] = useState("");



    const { data: dogImages, isLoading, error } = useDogsList(query);




    return (
        <DogsContext.Provider value={{
            query, setQuery, dogImages, isLoading,
            error

        }}>
            {children}
        </DogsContext.Provider>
    )
}

function useDogs() {
    const context = useContext(DogsContext);
    if (context === undefined) throw new Error("DogsContext was used outside of the DogsProvider")
    return context
}

export { DogsProvider, useDogs };