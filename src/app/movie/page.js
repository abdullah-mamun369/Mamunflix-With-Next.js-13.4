import Link from "next/link";
import MovieCard from "../Components/MovieCard";



const Movie = async () => {

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
            <h1>Movie page</h1>

            {
                main_data.map((curElem) => {
                    return <MovieCard key={curElem.id} {...curElem} />
                })
            }
        </>
    );
};

export default Movie;