import "./Header.css"
import { FaBars } from "react-icons/fa";

export default function Header(){
    return(
        <header>
            <div className="header-icons">
                <button>
                    <FaBars size={24} />
                </button>
                <img src="./logo.png" alt="IMDB Logo" className="header-img"/>
                <input type="text" placeholder="Search IMDb" />
            </div>
            <nav className="header-links">
                <a href="">Trending</a>
                <a href="">IMDbPro</a>
                <a href="">Watchlist</a>
                <a href="">Sign In</a>
            </nav>
        </header>
    )
}