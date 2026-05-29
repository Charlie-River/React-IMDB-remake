import "./MovieRow.css"
import MovieCard from "../MovieCard/MovieCard"
import { FaStar } from "react-icons/fa"

export default function MovieRow(props){

    const movieEntry = props.movies.map((movie) => {
        return (
                <MovieCard 
                 key={movie.id}
                 movie={movie} />
        )
    })

    return (
    <div className="movie-row">
        {movieEntry}
    </div>
)
}