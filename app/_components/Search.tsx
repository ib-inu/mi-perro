"use client";
import { useDogs } from '@/app/_context/DogsContext';
import { FormEvent, useState } from 'react';
import { DogsSuggestion } from "@/app/helper/DogsSuggestion";

function Search() {
    const { setQuery, error } = useDogs();
    const [value, setValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const data = DogsSuggestion;


    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (value.length > 2) setQuery(value);
        setIsFocused(false);
    }

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        setValue(suggestion);
        setSuggestions([]);
        setIsFocused(false);
    };

    return (
        <form onSubmit={onSubmit} className="relative flex mt-5 flex-col items-center">
            <input
                type="search"
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                onChange={(e) => {
                    setValue(e.target.value);
                    if (e.target.value.length > 0) {
                        const filteredSuggestions = data.filter((item) =>
                            item.toLowerCase().includes(e.target.value.toLowerCase())
                        );
                        setSuggestions(filteredSuggestions);
                    } else {
                        setSuggestions([]);
                    }
                }}
                placeholder="Search by breed..."
                className="border-2 rounded-lg p-2 w-42 sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {suggestions.length === 0 && error && (
                <p className="text-gray-400 text-sm font-bold">{error}</p>
            )}

            {isFocused && value.length > 1 && suggestions.length >= 1 && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 w-64 top-full bg-white border border-gray-300 max-h-48 overflow-y-auto mt-1 z-10">
                    {suggestions.slice(0, 5).map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
}

export default Search;
