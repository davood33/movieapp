function PageNavigatorYears() {
  sessionStorage.setItem("page", "1");
  AddSelectedClass(pageNum[0]);
  next.addEventListener("click", () => {
    for (let i = 0; i < pageNum.length; i++) {
      if (pageNum[i].innerHTML === sessionStorage.getItem("page") && pageNum[i].innerHTML !== "10") {
        sessionStorage.setItem("page", `${pageNum[i + 1].innerHTML}`);
        const url = `https://api.themoviedb.org/3/discover/movie?page=${sessionStorage.getItem("page")}&api_key=775c82528794f6f38cd6a9bd7c080365&primary_release_year=${sessionStorage.getItem('yearId')}&language=en-US`;
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
        const url = `https://api.themoviedb.org/3/discover/movie?page=${sessionStorage.getItem("page")}&api_key=775c82528794f6f38cd6a9bd7c080365&primary_release_year=${sessionStorage.getItem('yearId')}&language=en-US`;

        ClearMain();
        pageNum[i - 1].classList.add("selected-page");
        pageNum[i].classList.remove("selected-page");
        FetchMoviesUrl(url);
        if (pageNum[i - 1] === pageNum[0] &&
          pageNum[0].innerHTML !== "1") {
            console.log("its the first page");
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
