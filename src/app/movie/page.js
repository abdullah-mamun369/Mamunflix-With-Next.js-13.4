import Link from "next/link";
import MovieCard from "../Components/MovieCard";
import styles from "../styles/common.module.css"



const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_API_KEY
    const RaKey = process.env.X_RapidAPI_Key
    const RaHost = process.env.X_RapidAPI_Host

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': RaKey,
            'X-RapidAPI-Host': RaHost
        }
    };



    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;