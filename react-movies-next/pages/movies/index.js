import { MoviesList } from '@/components/MoviesList/MoviesList';
import { SearchMovies } from '@/components/SearchMovies/SearchMovies';
import { useSearchMovieByTitle } from '@/hooks/useSearchMovieByTitle';
import { MoviesService } from '@/services/MoviesService';
import {  useState } from 'react';

export default function Movies({ movies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = useSearchMovieByTitle(searchQuery);

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

export async function getStaticProps() {
  const { data } = await MoviesService.getMovies();

  return {
    props: { movies: data.results }
  }
}