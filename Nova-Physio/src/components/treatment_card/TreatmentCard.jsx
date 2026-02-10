import styles from "../treatment_card/treatmentCard.module.scss";
function TreatmentCard({ icon, title, description }) {
    return (
        <>
            <article className={styles.card}>
                <div className={styles.icon_container}>
                    <img
                        src={icon}
                        alt={title}
                    />
                </div>
                <div className={styles.description_container}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </article>
        </>
    );
}

export default TreatmentCard;
