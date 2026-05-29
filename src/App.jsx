
import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import MovieCard from "./components/MovieCard/MovieCard.jsx"
import MovieRow from "./components/MovieRow/MovieRow.jsx"
import Footer from "./components/Footer/Footer.jsx"
import movies from "./data.js"
import './App.css'

function App() {

  const featuredMovie = movies[0]

  const trendingMovies = movies.filter(movie => movie.trending)
  const topRatedMovies = movies.filter(movie => movie.topRated)
  const popularMovies = movies.filter(movie => movie.popular)

  return (
    <>
      <Header />
      
      <Hero movie={featuredMovie}/>
      
      <h2 className="section-title">Trending</h2>
      <MovieRow movies={trendingMovies}/>


      <h2 className="section-title">Top Rated</h2>
      <MovieRow movies={topRatedMovies}/>


      <h2 className="section-title">Popular</h2>
      <MovieRow movies={popularMovies}/>

      <Footer />
    </>
  )
}

export default App
