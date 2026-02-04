import styles from "../services_card/servicesCard.module.scss";
import { Link } from "react-router-dom";
function ServicesCard({ id, serviceImg, serviceTitle, description }) {
    return (
        <>
            <Link to={`/services/${id}`}>
                <article className={styles.card}>
                    <div className={styles.image_container}>
                        <img
                            src={serviceImg}
                            alt={serviceTitle}
                        />
                    </div>
                    <div className={styles.description_container}>
                        <h3>{serviceTitle}</h3>
                        <p>{description} </p>
                    </div>
                </article>
            </Link>
        </>
    );
}

export default ServicesCard;
