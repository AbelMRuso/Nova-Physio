import styles from "../nav/nav.module.scss";

function Nav() {
    return (
        <>
            <nav className={styles.navbar}>
                <a href="#">Accueil</a>
                <a href="#">Équipe</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
        </>
    );
}

export default Nav;
