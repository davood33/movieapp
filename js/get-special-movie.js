const id = sessionStorage.getItem('id');
    async function GetSpecialMovie(id) {
      const response = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=775c82528794f6f38cd6a9bd7c080365`
        ),
        fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=775c82528794f6f38cd6a9bd7c080365`
        ),
        fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=775c82528794f6f38cd6a9bd7c080365`
        ),
      ]);
      const data1 = await response[0].json();
      const data2 = await response[1].json();
      const data3 = await response[2].json();
      SetValuesForSpeacialMovie(data1, data2 , data3);
    } 
GetSpecialMovie(id);