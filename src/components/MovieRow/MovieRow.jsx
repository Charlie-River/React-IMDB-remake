import "./MovieRow.css"
import MovieCard from "../MovieCard/MovieCard"
import { FaStar } from "react-icons/fa"
import {useRef} from "react"

export default function MovieRow(props){

    const rowRef = useRef(null)

    const scrollLeft = () =>{
        rowRef.current.scrollBy({
            left: -300,
            behaviour: "smooth"
        })
    }

    const scrollRight = () => {
        rowRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        })
    }

    const movieEntry = props.movies.map((movie) => {
        return (
                <MovieCard 
                 key={movie.id}
                 movie={movie} />
        )
    })

     return (
        <div className="movie-row-wrapper">

            <button className="scroll-btn left" onClick={scrollLeft}>
                ◀
            </button>

            <div className="movie-row" ref={rowRef}>
                {movieEntry}
            </div>

            <button className="scroll-btn right" onClick={scrollRight}>
                ▶
            </button>

        </div>
)
}