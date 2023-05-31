const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzA0OGMyYjc1ZWFmNWNiYjNlM2FmMDM1ZTM5NWJkNyIsInN1YiI6IjY0NmI4NTU5NTRhMDk4MDE3MjhhYzg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BZeGC1MhzMK5NF_F0AunEtKXDLyYURRTMnhkVBfg08c";

export async function getSearchResult({ title }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const params = new URLSearchParams({
    include_adult: false,
    language: "en",
    query: title,
  });
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?${params}`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTrendingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const params = new URLSearchParams({
    include_adult: false,
    language: "en",
    page: 1,
  });
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?'${params}`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getNowPlayingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const params = new URLSearchParams({
    include_adult: false,
    language: "en",
    page: 1,
  });
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?'${params}`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTopRatedMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const params = new URLSearchParams({
    include_adult: false,
    language: "en",
    page: 1,
  });
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?'${params}`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMovieDetails({ movieId }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const params = new URLSearchParams({
    language: "en",
  });
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?'${params}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMovieRecommendations({ movieId }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const params = new URLSearchParams({
    language: "en",
  });
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?${params}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function getMovies({
  year,
  genres,
  voteAverageGte,
  voteAverageLte,
}) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const params = new URLSearchParams(
    Object.fromEntries(
      Object.entries({
        language: "en",
        year: year,
        with_genres: genres?.map(genre => genre.id).join(','),
        "vote_average.gte": voteAverageGte,
        "vote_average.lte": voteAverageLte,
      }).filter(([, value]) => !!value)
    )
  );
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?${params}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
