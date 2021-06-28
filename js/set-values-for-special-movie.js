function SetValuesForSpeacialMovie(respMovieData, respCreditsData , respMovieVideos) {
  console.log(respMovieData.genres.length);
  const director_name = document.getElementById("director-name");//innerHtml = director;
  const overview = document.getElementById("overview");//innerHtml =`${respMovieData.overview}`
  const score = document.getElementById("score");//innerHtml = `${respMovieData.vote_average}`
  const stars_inner = document.getElementById("stars-inner");//style.width = `${respMovieData.vote_average}%`
  const original_title = document.getElementById("original-title");//innerhtml = `${respMovieData.original_title}`
  const poster = document.getElementById("poster");//src = `https://image.tmdb.org/t/p/w500${respMovieData.poster_path}`
  const musician_name = document.getElementById("musician-name");//innerHtml = musician;
  const producers_name = document.getElementById("producers");//innerHtml = musician;
  const released_date = document.getElementById("released-date");//innerHtml = musician;
  const genres_container = document.getElementById("genres-container");//innerHtml = musician;
  const backdrop = document.getElementById("backdrop");//innerHtml = musician;
  const trailer_link = document.getElementById("trailer-link");//innerHtml = musician;
  const acters_name = document.querySelectorAll('.actors-name');
  const genres_name = document.querySelectorAll('.genre-name');
    console.log(respMovieData);
    console.log(respCreditsData);
    var director = "";
    var musician = "";
    const producers = [];
    const actors = [];
    for (let i = 0; i < respMovieData.genres.length; i++) {
      console.log(" i = " +i);
      const genre = document.createElement('a');
      genre.href = '#';
      genre.innerHTML = respMovieData.genres[i].name;
      genres_container.appendChild(genre);
      if (i === respMovieData.genres.length-1 || i === 2 ) {
        break;
      }
      genre.innerHTML += " , "
    }
    for (let i = 0; i < acters_name.length; i++) {
      acters_name[i].innerText = respCreditsData.cast[i].name;
    }
    respCreditsData.crew.forEach((crew) => {
      if (crew.job == "Producer") {
        producers.push(" " + crew.name + " ");
      } else if (crew.job == "Director") {
        director += crew.name;
      } else if (crew.job == "Original Music Composer") {
        musician += crew.name;
      }
    });
    if(producers.length>3)
    {
      producers.length = 3;
    }
    if(musician == ""){
      musician = " -";
    }
    const producersNames = producers.toString();
    director_name.innerHTML = director;
    overview.innerHTML = `${respMovieData.overview}`;
    console.log(`legth of overview is ${respMovieData.overview.length}`);
    if(respMovieData.overview.length>300){
      overview.style.height = '60px';
      overview.style.overflow = 'auto';
    }
    if(respMovieData.original_title.length>25){
      original_title.style.fontSize = '2.1rem';
    }
    const date = respMovieData.release_date.split("-");
    score.innerHTML =`${respMovieData.vote_average}`;
    stars_inner.style.width = `${(respMovieData.vote_average)*10}%`;
    original_title.innerHTML = `${respMovieData.original_title}`;
    poster.src = `https://image.tmdb.org/t/p/w500${respMovieData.poster_path}`
    musician_name.innerText = musician;
    producers_name.innerHTML = `<b>Producers:</b>${producersNames}`;
    released_date.innerHTML = date[0];
    backdrop.src = `https://image.tmdb.org/t/p/w500${respMovieData.backdrop_path}`;
    trailer_link.href = `https://www.youtube.com/watch?v=${respMovieVideos.results[0].key}`;
  }