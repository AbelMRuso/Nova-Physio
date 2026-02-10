import { HashLink } from "react-router-hash-link";
import styles from "../nav/nav.module.scss";
import { BiSolidHome } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { TbPhysotherapist } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Nav() {
    return (
        <nav className={styles.navbar}>
            <HashLink
                className={styles.navlink}
                smooth
                to="/#home"
            >
                <span className={styles.icon}>
                    <BiSolidHome />{" "}
                </span>{" "}
                <span className={styles.text}>Accueil</span>
            </HashLink>
            <HashLink
                className={styles.navlink}
                smooth
                to="/#team"
            >
                <span className={styles.icon}>
                    <RiTeamFill />
                </span>
                <span className={styles.text}>Équipe</span>
            </HashLink>
            <HashLink
                className={styles.navlink}
                smooth
                to="/#services"
            >
                <span className={styles.icon}>
                    <TbPhysotherapist />
                </span>
                <span className={styles.text}>Services</span>
            </HashLink>
            <HashLink
                className={styles.navlink}
                smooth
                to="/#treatment"
            >
                <span className={styles.icon}>
                    <FaHandHoldingMedical />
                </span>
                <span className={styles.text}>Traitement</span>
            </HashLink>
            <HashLink
                className={styles.navlink}
                smooth
                to="/#contact"
            >
                <span className={styles.icon}>
                    <FaLocationDot />
                </span>
                <span className={styles.text}>Contact</span>
            </HashLink>
        </nav>
    );
}

export default Nav;
