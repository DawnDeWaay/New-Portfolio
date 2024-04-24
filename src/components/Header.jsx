import Tilt from "react-parallax-tilt";

const Header = ({toggleDarkMode}) => {
  return (
    <Tilt
      tiltMaxAngleX={1}
      tiltMaxAngleY={1}
      className="header"
      style={{ width: "80%", position: "fixed" }}
    >
      <div></div>
    </Tilt>
  );
};

export default Header;
