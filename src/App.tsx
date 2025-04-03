import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import Search from "./components/Search"
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  original_language: string;
  vote_average: number;
  genre_ids: number[];
  backdrop_path: string;  
}

export interface genre {
  id: number;
  name: string;
}

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept : "application/json",
    authorization: `Bearer ${API_KEY}`,
  }
}

function App() {
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearch, setDebounceSearch] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => setGenres(data.genres))
        .catch(error => console.error("Erro ao buscar gêneros:", error));
}, []);

  useDebounce(() => setDebounceSearch(search), 500, [search]);

  const fetchMovies = async ( query = "" ) => {
    setIsLoading(true);
    setErrorMessage("");
    
    try{
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc=${API_KEY}`;
      const responde = await fetch(endpoint, API_OPTIONS);

      if(!responde.ok){
        throw new Error("Failed to fetch movies");
      }
      const data = await responde.json();

      if(data.Response === "False"){
        setErrorMessage(data.Error || "Error fetching movies");
        setMoviesList([]);
        return;
      }

      setMoviesList(data.results);
      console.log(data.results);
      
    }catch(error){
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debounceSearch);
  }, [debounceSearch]);

  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper" >
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Explore. Discover. <span className="text-gradient">Everything</span> about movies!</h1>
          
          <Search search={search} setSearch={setSearch} />
        </header>

        <section className="all-movies">

          <div className="flex justify-between items-end">
            <h2 className="mt-[40px]">All Movies</h2>
            <label htmlFor="" className="text-2xl font-bold text-white sm:text-3xl">Filter</label>  
          </div>
          

          {isLoading ? (
            <Spinner/>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {moviesList.map((movie: Movie) => (
                <MovieCard key={movie.id} movie={movie} genres={genres} />
              ))}
            </ul>
          )}
        </section>
      </div>

    </main>
  )
}

export default App