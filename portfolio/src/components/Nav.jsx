import CardNav from '../blocks/CardNav/CardNav';
// import log from './logo.svg';

const Nav = () => {
  const items = [
    {
      label: "Home",
      bgColor: "#5506ccff",
      textColor: "#fff",
    },
    {
      label: "Experience", 
      bgColor: "#6b0566ff",
      textColor: "#fff",
      links: [
        { label: "MyRaina", ariaLabel: "Featured Projects" },
        { label: "CTDI", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#1f2199ff", 
      textColor: "#fff",
      links: [
        { label: "Ride Sharing", ariaLabel: "Email us" },
        { label: "Voting Platform", ariaLabel: "Twitter" },
        { label: "Eclipse Simulation", ariaLabel: "LinkedIn" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#c845e2ff", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
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