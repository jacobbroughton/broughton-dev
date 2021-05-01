import { useEffect, useState } from "react"
import { openPopupWidget } from "react-calendly";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive"
import "./Navbar.scss";

const Navbar = () => {

  const [menuToggled, setMenuToggled] = useState(false)
  const isMobileOrSmall = useMediaQuery({
    query: '(max-width: 750px)'
  })


  const NavCTA = ({ url, prefill, pageSettings, utm, styles }) => {
    const onClick = () =>
      openPopupWidget({ styles, url, prefill, pageSettings, utm });

    return (
      <button className="navCTA" onClick={onClick}>
        Book a Meeting Now
      </button>
    );
  };

  useEffect(() => {
    console.log("Yes")
    if(menuToggled) {
      setMenuToggled(false)
    }
  }, [isMobileOrSmall])


  return (
    <div className="navbar">
      <div className={`navContainer ${menuToggled}`}>
        <div className="navLinks">
          <Link className="homeLink">Broughton Dev</Link>

          {
            !menuToggled && <div className="hamburgerMenu" onClick={() => setMenuToggled(!menuToggled)}>Menu</div>
          }
          
        
          <div className={menuToggled ? "OPENsecondaryLinksAndCTA" : "secondaryLinksAndCTA"}>
            <div className="secondaryLinks">
                <Link to="#" className="secondaryLink">About</Link>
                <Link to="#" className="secondaryLink">Pricing</Link>
                <Link to="#" className="secondaryLink">Portfolio</Link>
                <Link to="#" className="secondaryLink">Contact</Link>
            </div>
            <NavCTA url="https://calendly.com/broughtondev" />
          </div>
          { menuToggled && <div className="overlay" onClick={() => setMenuToggled(!menuToggled)}></div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
