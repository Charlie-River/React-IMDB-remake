import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <footer>
            <div>
                <img src="./logo.png" alt="IMDB icon" className="footer-img"/>
            </div>

            <div className="footer-list">
                <h4>Movies</h4>
                <ul>
                    <li>Now Playing</li>
                    <li>Top Rated</li>
                    <li>Upcoming</li>
                    <li>Browse Movies</li>
                </ul>
            </div>

            <div className="footer-list">
                <h4>TV Shows</h4>
                <ul>
                    <li>Popular TV</li>
                    <li>Top Rated</li>
                    <li>On TV</li>
                    <li>Browse TV Shows</li>
                </ul>
            </div>

            <div className="footer-list">
                <h4>Help</h4>
                <ul>
                    <li>Help Center</li>
                    <li>Contributor Zone</li>
                    <li>Contact Us</li>
                    <li>Accessibility</li>
                </ul>
            </div>

            <div className="footer-icons">
                <ul>
                    <li> <FaFacebook/> </li>
                    <li> <FaTwitter/> </li>
                    <li> <FaInstagram/> </li>
                    <li> <FaYoutube/> </li>
                </ul>
            </div>

        </footer>
    )
}