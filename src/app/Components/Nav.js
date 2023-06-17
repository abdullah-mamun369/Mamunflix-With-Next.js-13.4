import Link from "next/link";
import style from "../styles/navbar.module.css"

const Nav = () => {
    return (
        <nav className={style.navbar}>
            <div>
                <ul className={style.navbarList}>
                    <li className={style.navbarItem}>
                        <Link className={style.navbarLink} href="/">
                            Home
                        </Link>
                    </li>
                    <li className={style.navbarItem}>
                        <Link className={style.navbarLink} href="/about">
                            About
                        </Link>
                    </li>
                    <li className={style.navbarItem}>
                        <Link className={style.navbarLink} href="/movie">
                            Movie
                        </Link>
                    </li>
                    <li className={style.navbarItem}>
                        <Link className={style.navbarLink} href="contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;