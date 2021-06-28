function GetMovieBySearch(value) {
    main.innerHTML = "";
    fetch(`${api.urlForSearch}${value}`)
      .then((response) => response.json())
      .then(GetMovies);
  }