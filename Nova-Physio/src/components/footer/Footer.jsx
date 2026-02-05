import styles from "../footer/footer.module.scss";
import clockIcon from "../../assets/icons/clock.svg";
import telephoneIcon from "../../assets/icons/telephone_icon.svg";
import locationIcon from "../../assets/icons/location.svg";
import mapImage from "../../assets/images/address.png";
function Footer() {
    return (
        <>
            <footer className={styles.footer_container}>
                <div className={styles.info_container}>
                    <div className={styles.info_block}>
                        <img
                            src={clockIcon}
                            alt=""
                        />
                        <p>L - V | 8h - 18h</p>
                    </div>
                    <div className={styles.info_block}>
                        <img
                            className={styles.telephone_icon}
                            src={telephoneIcon}
                            alt=""
                        />
                        <p>+33 767 182 342</p>
                    </div>
                    <div className={styles.info_block}>
                        <img
                            src={locationIcon}
                            alt=""
                        />
                        <p>17 rue complètement inventée, 40230, Tosse</p>
                    </div>
                </div>
                <div className={styles.map_container}>
                    <a
                        href="https://www.google.com/maps/place/O'Cartouche+Pizza/@43.6824053,-1.3621816,17z/data=!4m14!1m7!3m6!1s0xd5150a0f8d8a3dd:0x444e0bf75be983bd!2sO'Cartouche+Pizza!8m2!3d43.6824014!4d-1.3596067!16s%2Fg%2F11g6njfyfb!3m5!1s0xd5150a0f8d8a3dd:0x444e0bf75be983bd!8m2!3d43.6824014!4d-1.3596067!16s%2Fg%2F11g6njfyfb!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={mapImage}
                            alt="Mapa con la ubicación del establecimiento"
                        />
                    </a>
                </div>
                <div className={styles.legal_info_container}>
                    <p className={styles.rights}>
                        <span>Nova Physio Kinésithérapie © </span>all rights reserved
                    </p>
                    <p className={styles.mentions}>
                        <a
                            href="#"
                            target="_blank"
                        >
                            Mentions légales
                        </a>
                        | Designed and developped by
                        <a
                            href="https://abel-mruso-portfolio.netlify.app"
                            target="_blank"
                        >
                            <span> Black sheep develppements</span>
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
}
export default Footer;
