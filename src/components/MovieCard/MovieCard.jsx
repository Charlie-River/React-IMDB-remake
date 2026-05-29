import "./MovieCard.css"
import { FaStar } from "react-icons/fa"

export default function MovieCard(props){
    console.log(props)
    return(
        <div className="movie-card">
            <img src={props.movie.poster} alt={props.movie.title}/>
            <div className="card-content">
                <h3>{props.movie.title}</h3>
                <p className="rating">
                    <FaStar/>
                    {props.movie.rating}
                </p>
            </div>
        </div>
    )
}