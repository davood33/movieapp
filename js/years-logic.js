const allYearsOptions = document.querySelectorAll(".years-suggested");
allYearsOptions.forEach((option) =>{
  option.addEventListener("click",()=>{
    sessionStorage.setItem('yearId',`${option.value}`);
    window.location.href = 'years.html';

  })
})