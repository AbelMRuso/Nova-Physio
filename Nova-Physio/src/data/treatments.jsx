import appointmentIcon from "../assets/icons/appointment.svg";
import evaluationIcon from "../assets/icons/physical_therapy.svg";
import treatmentIcon from "../assets/icons/acupuncture.svg";
import monitoringIcon from "../assets/icons/body_check.svg";

export const treatments = [
    {
        id: "rendez-vous",
        icon: appointmentIcon,
        title: "1. Rendez-vous",
        description: (
            <>
                Contactez-nous par téléphone pour vous informer sans engagement et <strong> fixer un rendez-vous</strong> au jour et à l’heure qui
                vous conviennent le mieux.
            </>
        ),
    },
    {
        id: "evaluation",
        icon: evaluationIcon,
        title: "2. Évaluation",
        description: (
            <>
                À votre arrivée à la clinique, nous réaliserons une <strong>évaluation détaillée</strong> afin de déterminer l’origine du problème et
                d’établir un plan de prise en charge spécifique, en choisissant la technique la plus adaptée. Ensuite, nous{" "}
                <strong>procéderons à la première séance</strong> en appliquant la méthode sélectionnée.
            </>
        ),
    },
    {
        id: "traitement-specifique",
        icon: treatmentIcon,
        title: "3. Traitement spécifique",
        description: (
            <>
                <strong>Séances de 45 minutes</strong> 100 % personnalisées, utilisant des <strong>techniques de pointe</strong> et du
                <strong> matériel haut de gamme</strong> pour garantir une <strong>récupération</strong> rapide et <strong>efficace</strong> des
                blessures.
            </>
        ),
    },
    {
        id: "suivi-et-ajustements",
        icon: monitoringIcon,
        title: "4. Suivi et ajustements",
        description: (
            <>
                Toujours en pensant à votre bien-être, nous <strong>adapterons le plan de traitement</strong> en fonction de votre évolution et des
                résultats attendus.<strong> Le traitement spécifique</strong> nécessite généralement <strong>entre 1 et 3 séances</strong>, auxquelles
                nous ajouterons des exercices et des séances de physiothérapie classique si nécessaire pour accompagner le traitement et améliorer le
                processus de récupération.
            </>
        ),
    },
];

export default treatments;
