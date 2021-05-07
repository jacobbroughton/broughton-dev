import { useEffect, useState } from "react"
import CTAButton from "../CTA Button/CTAButton"
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive"
import "./Navbar.scss";

const Navbar = () => {

  const [menuToggled, setMenuToggled] = useState(false)
  const [resizedOnScroll, setResizedOnScroll] = useState(false)
  const isMobileOrSmall = useMediaQuery({
    query: '(max-width: 750px)'
  })



  useEffect(() => {
    if(menuToggled) {
      setMenuToggled(false)
    }
  }, [isMobileOrSmall])

  const resizeNavOnScroll = () => {
    const distanceY = window.pageYOffset,
    shrinkOn = 300
    
    if(distanceY > shrinkOn) {
      setResizedOnScroll(true)
    } else {
      setResizedOnScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", resizeNavOnScroll())
  }, [window.pageYOffset])


  return (
    <div className={`navbar ${resizedOnScroll ? 'small' : ''}`}>
      <div className={`navContainer ${menuToggled}`}>
        <div className="navLinks">
          <Link to="/" className="homeLink">Broughton Dev</Link>

          {
            !menuToggled && <div className="hamburgerMenu" onClick={() => setMenuToggled(!menuToggled)}>Menu</div>
          }
          
          <div className={menuToggled ? "OPENsecondaryLinksAndCTA" : "secondaryLinksAndCTA"}>
            <div className="secondaryLinks">
                <Link to="/about" className="secondaryLink">About</Link>
                <Link to="#" className="secondaryLink">Pricing</Link>
                <Link to="/portfolio" className="secondaryLink">Portfolio</Link>
                <Link to="/contact" className="secondaryLink">Contact</Link>
            </div>
            <CTAButton url="https://calendly.com/broughtondev" />
          </div>
          { menuToggled && <div className="overlay" onClick={() => setMenuToggled(!menuToggled)}></div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
