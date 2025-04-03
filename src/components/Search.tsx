interface SearchProps {
    search: string;
    setSearch: (value: string) => void;
}

function Search ({search, setSearch}: SearchProps) {
    return (
        <div className="search"> 
            <div>
                <img src="./public/search.svg" alt="Search" />

                <input type="text"
                placeholder="Search for a thousands of movies"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            </div>
        </div>
    )
}

export default Search