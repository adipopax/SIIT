import { useEffect, useState } from "react"

export function ShoppingCart() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const cartUrl = 'http://localhost:3001/cart';
    const moviesUrl = 'http://localhost:3001/movies';
    

    fetch(cartUrl)
      .then(response => response.json)
      .then(cartList => {
        const { cart } = cartList;

        fetch(moviesUrl)
          .then(response => response.json)
          .then(movies => {
            const cartMovies = movies.filter((movie) => {
              const hasMovie = cart.movies.find(cartMovie => cartMovie.movieId === movie.id)

              return hasMovie
            })
            .map((movie) => {
              const hasMovie = cart.movies.find(cartMovie => cartMovie.movieId === movie.id)

              return(hasMovie)
            })

            setMovies(cartMovies);
          });


      });
  }, []);

  return (

    <section>
      <h1>Shopping Cart!</h1>

      <ul>
        {
          movies.map((movie) => (
            <li>
              <p>{ movie.movie.id }</p>
              <p>{ movie.quantity }</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
