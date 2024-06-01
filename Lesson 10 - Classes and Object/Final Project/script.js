// script.js

class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }
}

const defaultMovies = [
    {
        title: 'Jurassic Park',
        director: 'John Doe',
        year: '1990'
    },
    {
        title: 'The Dead Pool',
        director: 'Mathew Albison',
        year: '2014'
    },
    {
        title: 'The Avengers',
        director: 'Joss Whedon',
        year: '2012'
    }
];

class UI {
    static addMovieToList = (movie) => {
        const list = document.getElementById('movie-list');
        const row = document.createElement('tr');
        row.dataset.movieId = movie.id; // Assuming you have an id property in your Movie class
        row.innerHTML = `<td>${movie.title}</td><td>${movie.director}</td><td>${movie.year}</td><td><button class="btn btn-danger delete-btn">Delete</button></td>`;
        list.appendChild(row);
    };

    static displayMovies = () => {
        defaultMovies.forEach(movie => UI.addMovieToList(movie));
    };
}

UI.displayMovies();

document.querySelector('#movie-form').addEventListener('submit', addAMovie);

document.getElementById('movie-list').addEventListener('click', function (e) {
    if (e.target && e.target.matches('button.delete-btn')) {
        deleteMovie(e.target.closest('tr').dataset.movieId);
    }
});

function addAMovie(e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const year = document.querySelector('#year').value;

    const movie = new Movie(title, director, year);
    UI.addMovieToList(movie);
}

function deleteMovie(movieId) {
    const movieElement = document.querySelector(`tr[data-movie-id="${movieId}"]`);
    if (movieElement) {
        movieElement.remove();
        // Implement any additional logic needed for your data structure
    }
}

   





