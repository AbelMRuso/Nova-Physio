import HeroCard from "../hero_card/HeroCard";
import styles from "../main/main.module.scss";
import profileAdri from "../../assets/images/hero_Adri.JPG";
import profileYas from "../../assets/images/hero_Yas.JPG";
import ServicesCard from "../services_card/ServicesCard";
import services from "../../data/services.js";
import TreatmentCard from "../treatment_card/TreatmentCard.jsx";
import treatments from "../../data/treatments.jsx";
import CtaButton from "../ctaButton/CtaButton.jsx";

function Main() {
    return (
        <>
            <main className={styles.main_container}>
                <section
                    id="team"
                    className={styles.team_section}
                >
                    <h2>L'ÉQUIPE</h2>
                    <div className={styles.hero_card_container}>
                        <HeroCard
                            profileImage={profileAdri}
                            name={"Adrián Martín"}
                            ocupation={"CEO et kinésithérapeute"}
                            description={
                                "Texto de prueba que describirá a los profesionales, su experiencia, sus motivaciones, etc.. Máximo 2 párrafos no muy largos"
                            }
                        />
                        <HeroCard
                            profileImage={profileYas}
                            name={"Yasmina Más Saodí"}
                            ocupation={"Kinésithérapeute"}
                            description={
                                "Texto de prueba que describirá a los profesionales, su experiencia, sus motivaciones, etc.. Máximo 2 párrafos no muy largos"
                            }
                        />
                    </div>
                </section>
                <section
                    id="services"
                    className={styles.services_section}
                >
                    <h2>NOS SERVICES</h2>
                    <div className={styles.services_card_container}>
                        {services.map((service) => (
                            <ServicesCard
                                key={service.id}
                                id={service.id}
                                serviceImg={service.image}
                                serviceTitle={service.title}
                                description={service.shortDescription}
                            />
                        ))}
                    </div>
                </section>
                <section
                    id="treatment"
                    className={styles.treatment_section}
                >
                    <h2>LE TRAITEMENT</h2>
                    <div className={styles.treatment_card_container}>
                        {treatments.map((treatment) => (
                            <TreatmentCard
                                key={treatment.id}
                                icon={treatment.icon}
                                title={treatment.title}
                                description={treatment.description}
                            />
                        ))}
                    </div>
                    <CtaButton />
                </section>
            </main>
        </>
    );
}

export default Main;
