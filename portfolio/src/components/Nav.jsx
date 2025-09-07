import CardNav from '../blocks/CardNav/CardNav';
// import log from './logo.svg';
import GooeyNav from '../blocks/GooeyNav/GooeyNav';

const Nav = () => {

  
const items = [
  { label: "Home", href: "#home", bgColor: "#cc49dd7e", textColor: "#fff" },
  { label: "Experience", href: "#experience", bgColor: "#6b0566ff", textColor: "#fff" },
  { label: "Projects", href: "#projects", bgColor: "#1f2199ff", textColor: "#fff" },
  { label: "Contact", href: "#contact", bgColor: "#c845e2ff", textColor: "#fff" },
];



  return (
    <CardNav
    //   logo={logo}
    //   logoAlt="Company Logo"
      items={items}
      baseColor="#ad97b95b"
      menuColor="#8b139bff"
      buttonBgColor="#6016c0ff"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Nav;