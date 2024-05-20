
document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
  });

  function fetchMovies() {
    const apiKey = 'D4E9194C-AE0E-401D-81C8-28F474A9777A';
    const apiUrl = `https://api.amctheatres.com/v1/theatres/42/v2/movies?api-key=${apiKey}&language=en-US`;

    fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return res.json();
        })
        .then(data => {
            displayMovies(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
  }

  function displayMovies(data) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';

    data.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
        `;
        moviesContainer.appendChild(movieDiv);
    });
  }

  