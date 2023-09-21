import { useGetRecommendations } from "../../hooks/useGetRecommendations";
import { MovieItem } from "../MovieItem/MovieItem";
import styles from "./MovieRecommendations.module.css";

export function MovieRecommendations({movieId}){
    const recommendedMovies = useGetRecommendations(movieId);

    return(
        <section className={styles.recommendations}>
            {recommendedMovies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
        </section>
    )
}