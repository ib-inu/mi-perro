import { useDogs } from '../../context/DogsContext';

function Search() {
    const { query, setQuery } = useDogs();



    return (
        <form onSubmit={e => e.preventDefault()} className="flex justify-center mt-5">
            <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by breed.."
                className="border-2 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
        </form>
    );
}

export default Search;