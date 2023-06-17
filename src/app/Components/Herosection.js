import heroStyle from "../styles/herosection.module.css"
import style from "../styles/common.module.css"
import Image from "next/image";
import Link from "next/link";



const Herosection = ({ title, imageUrl }) => {



    return (
        <main className={heroStyle.main_section}>
            <div className={style.container}>
                <div className={style.grid_two_section}>
                    <div className={heroStyle.hero_content}>
                        <h1>{title}</h1>
                        <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button>Explore Movies</button>
                        </Link>
                    </div>

                    <div className={heroStyle.hero_image}>
                        <Image src={imageUrl} alt="Watching MamunFlix" width={500} height={500}></Image>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Herosection;