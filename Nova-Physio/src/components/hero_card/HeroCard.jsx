import styles from "../hero_card/heroCard.module.scss";

function HeroCard({ profileImage, name, ocupation }) {
    return (
        <>
            <article className={styles.card}>
                <div className={styles.profile_image}>
                    <img src={profileImage} alt="Profile image" />
                </div>
                <div className={styles.hero_info}>
                    <p className={styles.name}>{name}</p>
                    <h3 className={styles.ocupation}>{ocupation} </h3>
                </div>
            </article>
        </>
    );
}

export default HeroCard;
