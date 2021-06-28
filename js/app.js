const main = document.querySelector(".main");
const search = document.querySelector(".search-bar");
const search_botton = document.querySelector(".search-button");
search.addEventListener("keypress", CheckKey);
search_botton.addEventListener("click", CheckClick);
var pageNum = document.querySelectorAll(".page-num");
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const paging_container = document.querySelector(".paging-container");
const paging_ul = document.querySelector(".paging-ul");
const api = {
  key: "775c82528794f6f38cd6a9bd7c080365",
  url_home: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=775c82528794f6f38cd6a9bd7c080365`,
  url_sortByPopularity: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=775c82528794f6f38cd6a9bd7c080365`,
  url_bestMovieOfYear: ` http://api.themoviedb.org/3/discover/movie?primary_release_year=2018&
  sort_by=vote_average.desc&api_key=775c82528794f6f38cd6a9bd7c080365`,
  urlForSearch: `https://api.themoviedb.org/3/search/movie?api_key=775c82528794f6f38cd6a9bd7c080365&query=`,
  imgPath: "https://image.tmdb.org/t/p/w500",
  video_url: `https://www.youtube.com/watch?v=`,
};
async function FetchMoviesUrl(target_url) {
  const resp = await fetch(target_url);
  const respData = await resp.json();
  GetMovies(respData);
  // console.log(respData);
}
PageNavigator();
const url = `https://api.themoviedb.org/3/discover/movie?page=${sessionStorage.getItem("page")}&sort_by=popularity.desc&api_key=775c82528794f6f38cd6a9bd7c080365`;
FetchMoviesUrl(url);
const year = document.querySelector(".year");
