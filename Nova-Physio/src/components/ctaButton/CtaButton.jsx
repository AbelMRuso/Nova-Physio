import telephoneIcon from "../../assets/icons/telephone_icon.svg";

function CtaButton() {
    return (
        <button>
            <img
                src={telephoneIcon}
                alt="telephone icon"
            />
            Appeler
        </button>
    );
}

export default CtaButton;
