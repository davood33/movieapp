function CheckKey(event) {
    if (event.keyCode == 13 && search.value !== "") {
      GetMovieBySearch(search.value.split(" ").join("+"));
      search.value = "";
    }
  }
  function CheckClick() {
    GetMovieBySearch(search.value.split(" ").join("+"));
    search.value = "";
  }