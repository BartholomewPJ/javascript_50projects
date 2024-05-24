const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f242478ae6b6acb219eb429a43fec59e'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f242478ae6b6acb219eb429a43fec59e&page=1&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    
    const resultsTest = data.results
    console.log(resultsTest,resultsTest.length)
    
    movieArray = new Array()

    resultsTest.forEach((moviename,idx) => {
        if (moviename.original_title == moviename.title) {
            movieArray.push(resultsTest[idx])
        } 
        
    })

    // console.log(movieArray)
    // showMovies(data.results)
    showMovies(movieArray)
}

function showMovies(movies) {
    main.innerHTML=''

    movies.forEach((movie) => {
            const { title, poster_path, vote_average, overview } = movie
        
            // console.log("current title: ", movie.title, "original title: ", movie.original_title)
            
            const movieEl = document.createElement('div')
            movieEl.classList.add('movie')

            movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}"
        alt="${title}"/>

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
       `
        
            main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
    }
  

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !=='') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

