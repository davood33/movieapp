const allGenresOptions = document.querySelectorAll(".genres-suggested");
allGenresOptions.forEach((option) =>{
  option.addEventListener("click",()=>{
    sessionStorage.setItem('genreId',`${option.value}`);
    window.location.href = 'genre.html';

  })
})