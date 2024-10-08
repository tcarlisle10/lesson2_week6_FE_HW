import React, {useState} from 'react'


function MoviesList() {
    const [movies, setMovies] = useState([
        { title: "Rocky", description: "Rocky Balboa, a small-time boxer, gets a supremely rare chance to fight heavy-weight champion Apollo Creed in a bout in which he strives to go the distance for his self-respect.", 
            showDescription: false, genre: "Action"}, 
        { title: "The Departed", description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.", 
            showDescription: false, genre: "Crime"}, 
        { title: "Halloween", description: "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.", 
            showDescription: false, genre: "Horror"}, 
        { title: "The Green Mile", description: "The lives of guards on Death Row are visited by an Angel named John Coffey.", 
            showDescription: false, genre: "Drama"}]);

        const [filter, setFilter] = useState("all");
       
        const toggleDescription = (index) => {
          const updatedList = [...movies];
          updatedList[index].showDescription = !updatedList[index].showDescription;
          setMovies(updatedList);}

          const removeMovie = (index) => {
            const updatedList = [...movies];
            updatedList.splice(index, 1);
            setMovies(updatedList);
        }        



    return (  

        <div>

            <h1>Movies List</h1>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Action">Action</option>
                <option value="Crime">Crime</option>
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
            </select>
            <ul>
                {movies.filter((movie) => filter === "all" || movie.genre === filter).map((movie, index) => (
                    <li key={index}>
                        <h2>{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <button onClick={() => toggleDescription(index)}>{movie.showDescription ? "Hide Description" : "Show Description"}</button>
                        {movie.showDescription && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MoviesList

