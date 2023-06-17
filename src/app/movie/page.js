import Link from "next/link";



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

    console.log(data);

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