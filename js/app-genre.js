const main = document.querySelector(".main");
const search = document.querySelector(".search-bar");
const search_botton = document.querySelector(".search-button");
var pageNum = document.querySelectorAll(".page-num");
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const paging_ul = document.querySelector(".paging-ul");
const paging_container = document.querySelector(".paging-container");
// const search_value = search.value.split(" ").join("+");
search.addEventListener("keypress", CheckKey);
search_botton.addEventListener("click", CheckClick);
const api = {
  key: "775c82528794f6f38cd6a9bd7c080365",
  url_home: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=775c82528794f6f38cd6a9bd7c080365`,
  url_sortByPopularity: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=775c82528794f6f38cd6a9bd7c080365`,
  url_bestMovieOfYear: ` http://api.themoviedb.org/3/discover/movie?primary_release_year=2018&
    sort_by=vote_average.desc&api_key=775c82528794f6f38cd6a9bd7c080365`,
  urlForSearch: `https://api.themoviedb.org/3/search/movie?api_key=775c82528794f6f38cd6a9bd7c080365&query=`,
  imgPath: "https://image.tmdb.org/t/p/w500",
  video_url: `https://www.youtube.com/watch?v=`
};
async function FetchMoviesUrl(target_url) {
  const resp = await fetch(target_url);
  const respData = await resp.json();
  GetMovies(respData);
  // console.log(respData);
}
const url = `https://api.themoviedb.org/3/discover/movie?page=${sessionStorage.getItem("page")}&api_key=775c82528794f6f38cd6a9bd7c080365&with_genres=${sessionStorage.getItem('genreId')}&language=en-US`;
allyearsOptions.forEach((option) =>{
  option.addEventListener("click",()=>{
    sessionStorage.setItem('genreId',`${option.value}`);
    window.location.href = 'genre.html';
  })
})
console.log("bluh");
PageNavigatorGenre();
FetchMoviesUrl(url);


