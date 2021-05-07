import { Link } from "react-router-dom"
import "./CTABanner.scss"
import CTAButton from "../CTA Button/CTAButton"

const CTABanner = () => {
    return (
        <div className="CTA-banner">
          <div className="CTA-banner-container">
            <div className="CTA-text-parent">
                <h2>Make your online presence one of your business' greatest assets</h2>
                <p>Close the loop locked and loaded, nor prethink, and do i have consent to record this meeting.</p>
            </div>

            <div className="buttons">
              <CTAButton useCaseClass="cta-banner" url="https://calendly.com/broughtondev" />
              <Link to="#">See Plans </Link>
            </div>
          </div>
        </div>
    )
}

export default CTABanner