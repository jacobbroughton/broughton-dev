import { Link } from "react-router-dom"
import "./Footer.scss"
const Footer = () => {
    return (
        <footer>
          <div className="footer-container">
            <div className="left-side">
                <Link to="/">Home</Link>
            </div>
            <div className="right-side">
                <Link to="/about">About</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
          </div>
        </footer>
    )
}

export default Footer