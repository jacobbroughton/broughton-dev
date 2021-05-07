import { openPopupWidget } from "react-calendly";
import "./CTAButton.scss";

const CTAButton = ({ useCaseClass, url, prefill, pageSettings, utm, styles }) => {
  const onClick = () =>
    openPopupWidget({ styles, url, prefill, pageSettings, utm });
    
  return (
    <button className={`cta-button ${useCaseClass ? useCaseClass : ''}`} onClick={onClick}>
      Book a Meeting Now
    </button>
  );
};

export default CTAButton;
