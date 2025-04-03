
import { useNavigate } from 'react-router-dom';
import { Movie } from '../App'; // Adjust the import path as necessary
import { genre } from '../App'; // Adjust the import path as necessary

const MovieCard = ({movie}: {movie: Movie, genres: genre[]}) => {
    const {poster_path, title, vote_average, original_language, release_date, backdrop_path, overview} = movie;
    const navigate = useNavigate();

    function onDetailsClick() {
        navigate(`/details?title=${title}&vote_average=${vote_average}&release_date=${release_date}&poster_path=${poster_path}&backdrop_path=${backdrop_path}&overview=${overview}`);
    }
     return (
        <button className="movie-card" onClick={() => onDetailsClick()}>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "/no-poster.png"} alt={title}/>

            <div>
                <div className="mt-4">
                    <h3>{title}</h3>

                    <div className="content">
                        <div className="rating">
                            <img src="star.svg" alt="Star Icon" />
                            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>

                            <span>•</span>
                            <p className="lang">{original_language.toUpperCase()}</p>

                            <span>•</span>
                            <p className="year">{release_date ?release_date.split('-')[0] : "N/A"}</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default MovieCard;