import { MovieImage } from "../../components/MovieImage/MovieImage";
import styles from "@/styles/MovieDetails.module.css";
import { MovieRecommendations } from "../../components/MovieRecommendations/MovieRecommendations";

export function MovieDetails(){
    const { movieId } = useParams();
    console.log(router.query.movieId)
    return (
        <article className={styles.movie}>
            <section>
                <MovieImage path={movie.poster_path} size={500}/>
                <div className={styles.movieInfo}>
                    <h1>{movie.title}</h1>
                
                    <div className={styles.movieDescription}>
                        {movie.overview}
                    </div>
                </div>
            </section>
            
            <MovieRecommendations movieId={movieId}/>
        </article>
    )
}