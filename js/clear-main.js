function ClearMain(){
    const movieItems = document.querySelectorAll(".movie");
    movieItems.forEach((item)=>{
      main.removeChild(item);
    });
  }