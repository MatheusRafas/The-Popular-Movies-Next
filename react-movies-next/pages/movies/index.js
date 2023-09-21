import { MoviesList } from '@/components/components/MoviesList/MoviesList';
import { SearchMovies } from '@/components/components/SearchMovies/SearchMovies';
import { useSearchMovieByTitle } from '@/hooks/useSearchMovieByTitle';
import { MoviesService } from '@/services/MoviesService';
import { useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = useSearchMovieByTitle(searchQuery);

  MoviesService.getMovies().then(({ data }) => {
    setMovies(data.results)
  })

  function handleOnSearch(movieTitle) {
    setSearchQuery(movieTitle);
  }

  return (
    <>
      <SearchMovies onSearch={handleOnSearch} />
      <MoviesList movies={searchResults.length > 0 ? searchResults : movies} />
    </>
  );
}
