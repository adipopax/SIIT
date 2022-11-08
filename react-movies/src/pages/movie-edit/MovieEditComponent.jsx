import { useParams } from "react-router-dom"

export function MovieEditComponent() {
    const movieDetailUrl = 'http://localhost:3001/movies'
    let { movieId } = useParams();

  return (
    <form action="">
      <div>
      <label for='title'></label>
      <input id="title" type='text' />
      </div>
      
      <div>
      <label for='year'></label>
      <input id="year" type='number' />
      </div>

      <div>
      <label for='year'></label>
      <select id="type">
        <option>Movie</option>
        <option>TV Series</option>
        <option>Documentaries</option>
      </select>
      </div>

      <button>Save changes</button>
    </form>
  )
}