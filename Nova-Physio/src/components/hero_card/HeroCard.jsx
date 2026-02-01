import styles from "../hero_card/heroCard.module.scss";
import { useState } from "react";

function HeroCard({ profileImage, name, ocupation }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    return (
        <>
            <article
                className={`${styles.card} ${isFlipped ? styles.isFlipped : ""}`}
                onClick={!hasHover ? () => setIsFlipped(!isFlipped) : undefined}
            >
                <div className={styles.card_inner}>
                    <div className={styles.card_front}>
                        <div className={styles.profile_image}>
                            <img
                                src={profileImage}
                                alt="Profile image"
                            />
                        </div>
                        <div className={styles.hero_info}>
                            <p className={styles.name}>{name}</p>
                            <h3 className={styles.ocupation}>{ocupation} </h3>
                        </div>
                    </div>
                    <div className={styles.card_back}>
                        <p>Texto de prueba que será la descripción y la presentación de los profesionales</p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default HeroCard;
