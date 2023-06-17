import Link from "next/link";



const Movie = async () => {

    const url = process.env.RAPID_API_KEY

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
        }

    };
    console.log('X-RapidAPI-Key', 'X-RapidAPI-Host');


    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;


    return (
        <>
            <h1>Movie page</h1>
            <Link href="/movie/dymo">
                Go Dynamic
            </Link>
        </>
    );
};

export default Movie;