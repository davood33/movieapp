function PageNavigator() {
  sessionStorage.setItem("page", "1");
  AddSelectedClass(pageNum[0]);
  for(let i=0 ; i < pageNum.length ; i++){
    pageNum[i].addEventListener("click",()=>{doPage(pageNum[i])})
  }
  next.addEventListener("click", () => {
    for (let i = 0; i < pageNum.length; i++) {
      if (pageNum[i].innerHTML === sessionStorage.getItem("page") && pageNum[i].innerHTML !== "10") {
        sessionStorage.setItem("page", `${pageNum[i + 1].innerHTML}`);
        const url = `https://api.themoviedb.org/3/discover/movie?page=${sessionStorage.getItem("page")}&sort_by=popularity.desc&api_key=775c82528794f6f38cd6a9bd7c080365`;
        ClearMain();
        pageNum[i + 1].classList.add("selected-page");
        pageNum[i].classList.remove("selected-page");
        FetchMoviesUrl(url);
        if (
          pageNum[i + 1] === pageNum[pageNum.length - 1] &&
          pageNum[pageNum.length - 1].innerHTML !== "10"
        ) {
          console.log("its the last page");
          paging_ul.removeChild(pageNum[0]);
          const newPage = document.createElement("li");
          newPage.classList.add("page-num");
          newPage.innerHTML = `${eval(
            pageNum[pageNum.length - 1].innerHTML + "+ 1"
          )}`;
          paging_ul.insertBefore(newPage, next);
          pageNum = document.querySelectorAll(".page-num");
        }
        break;
      }
    }
  });
  previous.addEventListener("click", () => {
    for (let i = 0; i < pageNum.length; i++) {
      if (pageNum[i].innerHTML === sessionStorage.getItem("page") && i !== 0) {
        sessionStorage.setItem("page", `${pageNum[i - 1].innerHTML}`);
        const url = `https://api.themoviedb.org/3/discover/movie?page=${sessionStorage.getItem("page")}&sort_by=popularity.desc&api_key=775c82528794f6f38cd6a9bd7c080365`;
        ClearMain();
        pageNum[i - 1].classList.add("selected-page");
        pageNum[i].classList.remove("selected-page");
        FetchMoviesUrl(url);
        if (pageNum[i - 1] === pageNum[0] &&
          pageNum[0].innerHTML !== "1") {
            paging_ul.removeChild(pageNum[pageNum.length -1]);
            const newPage = document.createElement("li");
            newPage.classList.add("page-num");
            newPage.innerHTML = `${eval(
              pageNum[0].innerHTML + "- 1"
            )}`;
            paging_ul.insertBefore(newPage, pageNum[0]);
            pageNum = document.querySelectorAll(".page-num");
        }
        break;
      }
    }
  });
}
function AddSelectedClass(page) {
  page.classList.add("selected-page");
}
function doPage(page){
  if(page.innerHTML !== sessionStorage.getItem("page")){
    pageNum.forEach((page2)=>{
      if (page2.innerHTML === sessionStorage.getItem("page")) {
        page2.classList.remove("selected-page");
      }
    });
    AddSelectedClass(page);
    sessionStorage.setItem("page", page.innerHTML);
    if (page === pageNum[pageNum.length -1] && page.innerHTML!=="10") {
      paging_ul.removeChild(pageNum[0]);
      const newPage = document.createElement("li");
      newPage.classList.add("page-num");
      newPage.innerHTML = `${eval(pageNum[pageNum.length - 1].innerHTML + "+ 1")}`;
      paging_ul.insertBefore(newPage, next);
      pageNum = document.querySelectorAll(".page-num");
      newPage.addEventListener("click",()=>{doPage(newPage)})
      
    }
    if (page === pageNum[0] && page.innerHTML!=="1") {
      paging_ul.removeChild(pageNum[pageNum.length - 1]);
      const newPage = document.createElement("li");
      newPage.classList.add("page-num");
      newPage.innerHTML = `${eval(pageNum[0].innerHTML + "- 1")}`;
      paging_ul.insertBefore(newPage, pageNum[0]);
      pageNum = document.querySelectorAll(".page-num");
      newPage.addEventListener("click",()=>{doPage(newPage)});
      
    }
    ClearMain();
    const url = `https://api.themoviedb.org/3/discover/movie?page=${sessionStorage.getItem("page")}&sort_by=popularity.desc&api_key=775c82528794f6f38cd6a9bd7c080365`;
    FetchMoviesUrl(url);
    console.log(sessionStorage.getItem("page"));
  }
}