import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import services from "../../data/services";
import { useParams } from "react-router-dom";
import styles from "../treatment/treatment.module.scss";
import ReacMarkdown from "react-markdown";
import { useEffect } from "react";

function Treatment() {
    const { id } = useParams();
    const treatment = services.find((t) => t.id === id);

    if (!treatment) return <p>Treatment non trouvé</p>;

    // Scroll al inicio al montar el componente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav />
            <main className={styles.main_container}>
                <h1>{treatment.title}</h1>
                <div className={styles.image_and_info_container}>
                    <div className={styles.image_container}>
                        <img
                            src={treatment.image}
                            alt={treatment.title}
                        />
                    </div>
                    <section className={styles.info_container}>
                        <div>
                            <h2>Effets {treatment.subtitle}</h2>
                            <p>{treatment.treatmentEffects}</p>
                        </div>

                        <div>
                            <h2>Objectifs {treatment.subtitle}</h2>
                            <ol>
                                {treatment.treatmentGoals.map((goal, index) => (
                                    <li key={index}>
                                        <ReacMarkdown>{goal}</ReacMarkdown>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div>
                            <h2>Indications {treatment.subtitle}</h2>
                            <ul>
                                {treatment.treatmentIndications.map((indication, index) => (
                                    <li key={index}>
                                        <ReacMarkdown>{indication}</ReacMarkdown>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Treatment;
