import styles from "./MovieItem.module.css";
import { MovieImage } from "../MovieImage/MovieImage";
import Link from "next/link";

export function MovieItem({movie}){
    const dispatch = useDispatch();
    const favoriteMovies = useSelector((state) => state.favorite.movies);

    return(
        <div className={styles.movie}>
            <h3>{movie.title}</h3>

            <MovieImage path={movie.poster_path}/>

            <div className={styles.movieInfo}>
                <div>
                    <strong>Data de Lançamento:</strong> {movie.release_date}
                </div>
            </div>
            <div className={styles.movieFooter}>
                <Link href={`/movie/${movie.id}`}>Ver Detalhes</Link>
            </div>
        </div>
    )
}