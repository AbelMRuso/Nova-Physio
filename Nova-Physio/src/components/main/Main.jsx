import HeroCard from "../hero_card/HeroCard";
import styles from "../main/main.module.scss";
import profileAdri from "../../assets/images/hero_Adri.JPG";
import profileYas from "../../assets/images/hero_Yas.JPG";
import ServicesCard from "../services_card/ServicesCard";
import services from "../../data/services.js";
import TreatmentCard from "../treatment_card/TreatmentCard.jsx";
import treatments from "../../data/treatments.jsx";

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
                </section>
                <section className={styles.services_section}>
                    <h2>NOS SERVICES</h2>
                    {services.map((service) => (
                        <ServicesCard
                            key={service.id}
                            id={service.id}
                            serviceImg={service.image}
                            serviceTitle={service.title}
                            description={service.shortDescription}
                        />
                    ))}
                </section>
                <section className={styles.treatment_section}>
                    <h2>LE TRAITEMENT</h2>
                    {treatments.map((treatment) => (
                        <TreatmentCard
                            key={treatment.id}
                            icon={treatment.icon}
                            title={treatment.title}
                            description={treatment.description}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}

export default Main;
