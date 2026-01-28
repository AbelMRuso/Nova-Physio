import HeroCard from "../hero_card/HeroCard";
import styles from "../main/main.module.scss";
import profileAdri from "../../assets/images/hero_Adri.JPG";
import profileYas from "../../assets/images/hero_Yas.JPG";

function Main() {
    return (
        <>
            <main className={styles.main_container}>
                <section className={styles.team_section}>
                    <h2>L'ÉQUIPE</h2>
                    <HeroCard
                        profileImage={profileAdri}
                        name={"Adrián Martín"}
                        ocupation={"CEO et kinésithérapeute"}
                    />
                    <HeroCard
                        profileImage={profileYas}
                        name={"Yasmina Más Saodí"}
                        ocupation={"Kinésithérapeute"}
                    />
                </section>
            </main>
        </>
    );
}

export default Main;
