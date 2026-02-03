import styles from "../hero_card/heroCard.module.scss";
import { useState } from "react";

function HeroCard({ profileImage, name, ocupation, description }) {
    // controla el estado de card
    const [isFlipped, setIsFlipped] = useState(false);

    //Verifica si el dispositivo maneja hover o click y guarda una variable para aplicar al onClick
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    return (
        <>
            <article
                className={`${styles.card} ${isFlipped ? styles.isFlipped : ""}`}
                //operador ternario: si no hace hover, isflipped se cambia con click
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
                        <p>{description}</p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default HeroCard;
