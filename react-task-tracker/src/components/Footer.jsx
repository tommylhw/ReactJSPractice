import { Link } from "react-router-dom";

const Footer = () => {
  return(
    <footer>
      <p>Copyright &Copy; 2022</p>
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer;