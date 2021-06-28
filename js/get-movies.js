function GetMovies(respData) {
    respData.results.forEach((movie) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=775c82528794f6f38cd6a9bd7c080365`
      )
        .then((response) => response.json())
        .then(SetMoviesValue);
    });
  }