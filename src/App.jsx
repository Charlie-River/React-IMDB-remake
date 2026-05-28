
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import movies from "./data.js"
import './App.css'

function App() {

  const featuredMovie = movies[0]

  return (
    <>
      <Header />
      <Hero movie={featuredMovie}/>
    </>
  )
}

export default App
