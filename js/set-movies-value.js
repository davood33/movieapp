function SetMoviesValue(data) {
  console.log(`${data.vote_average} ---- ${data.vote_count}`);
    if (
      data.runtime > 0 &&
      data.genres.length > 0 &&
      data.vote_average > 4 &&
      data.vote_count > 10
    ) {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.addEventListener('click', ()=>{
        sessionStorage.setItem('id',`${data.id}`);
        window.location.href = 'index2.html';
      });
      const date = data.release_date.split("-");
      const runTime = `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}min`;
      if (data.original_title.length > 30) {
        movieEl.innerHTML = `<img
        src="${api.imgPath}${data.poster_path}"
        />
        <div class="description">
        <div><span class="title small2">${data.original_title}</span></div>
          <span class="rating">${data.vote_average}</span>
          <span class="year">${date[0]} | ${runTime} | ${data.genres[0].name}</span>
          </div>
          <div class="info"></div>`;
      } else if (
        data.original_title.length > 22 &&
        data.original_title.length <= 30
      ) {
        movieEl.innerHTML = `<img
          src="${api.imgPath}${data.poster_path}"
          />
          <div class="description">
          <div><span class="title small">${data.original_title}</span></div>
            <span class="rating">${data.vote_average}</span>
            <span class="year">${date[0]} | ${runTime} | ${data.genres[0].name}</span>
            </div>
            <div class="info"></div>`;
      } else {
        movieEl.innerHTML = `<img
          src="${api.imgPath}${data.poster_path}"
          />
          <div class="description">
          <div><span class="title">${data.original_title}</span></div>
            <span class="rating">${data.vote_average}</span>
            <span class="year">${date[0]} | ${runTime} | ${data.genres[0].name}</span>
            </div>
            <div class="info"></div>`;
      }
      main.insertBefore(movieEl , paging_container);
    }
  }