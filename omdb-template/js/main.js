const inputText = document.getElementById('input-text');
const fetchMoviesBtn = document.getElementById('fetch-movies-btn');
const contentDiv = document.getElementById('content-div');
fetchMoviesBtn.addEventListener('click', fetchMovies);

 
// The API key you need for OMDB:
 const myKey = 'da6f7329';


async function fetchMovies() {
  try {
    let url = 'http://www.omdbapi.com/?apikey=' + myKey + '&s=' + inputText.value;
    
    const response = await fetch(url);

    if(!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }
    
    const searchResult = await response.json();
    
    // Catches the array of the searched movie objects:
    const movies = searchResult.Search; 

    let content = '';
    for(let movie of movies) {
      content += `
        <div class="movie-div">
          <img src="${movie.Poster}">
          <h3> ${movie.Title} </h3>
          <h4> Year: ${movie.Year} </h4>
          <p> Type: ${movie.Type} </p>
        </div>
      `;
    }

    contentDiv.innerHTML = content;

  } catch (error) {
    console.log(error);
  }
}


