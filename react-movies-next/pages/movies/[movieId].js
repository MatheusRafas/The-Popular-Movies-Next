import { MoviesService } from "@/services/MoviesService";
import { MovieImage } from "../../components/MovieImage/MovieImage";
import styles from "@/styles/MovieDetails.module.css";

export default function MovieDetails({ movie }){
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
        </article>
    );
}

export async function getStaticPaths() {
    const { data } = await MoviesService.getMovies();

    const paths = data.results.map((movie) => ({
        params: { movieId: `${movie.id}`},
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { data } = await MoviesService.getMovieDetail(params.movieId);

    return {
        props: { movie: data },
    }
}