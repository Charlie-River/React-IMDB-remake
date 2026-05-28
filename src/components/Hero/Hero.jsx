import "./Hero.css"
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

export default function Hero({movie}) {
    return (
        <section className="hero"
            style={{
            "--bg-image": `url(${movie.backdrop})`,
            }}>
                <h1> {movie.title} </h1>
                <div className="hero-info">
                    <p className="rating">
                        <FaStar />
                        {movie.rating}</p>
                    <p>{movie.runtime}</p>
                    <p>{movie.year}</p>
                    <p>{movie.genre[0]}</p>
                </div>
                <p>{movie.description}</p>
                <div class="btn-container">
                <button className="trailer-btn"><FaPlay />Watch Trailer</button>
                <button className="info-btn">More Info</button>
                </div>
        </section>
    )
}