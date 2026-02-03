import styles from "../services_card/servicesCard.module.scss";

function ServicesCard({ serviceImg, serviceTitle, description }) {
    return (
        <>
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
        </>
    );
}

export default ServicesCard;
