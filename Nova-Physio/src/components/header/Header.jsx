import logo from "../../assets/images/logo_SVG.svg";
import telephone from "../../assets/icons/telephone_icon.svg";
import styles from "../header/header.module.scss";
import Nav from "../nav/Nav";

function Header() {
    return (
        <>
            <header className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                    <h1>
                        Nova <br /> Physio
                    </h1>
                </div>
                <div className={styles.subtitle_container}>
                    <h2 className={styles.subtitle}>Électropuncture | Kinésithérapie | Rééducation</h2>
                    <button>
                        <img src={telephone} alt="telephone icon" />
                        Appeler
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
