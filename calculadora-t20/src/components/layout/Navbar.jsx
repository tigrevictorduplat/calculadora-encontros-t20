import { Link } from "react-router-dom"

import Container from "./Container"
import logo from '../../img/valkaria.png'
import styles from './Navbar.module.scss'
function Navbar() {
    return (
    <nav className={styles.navbar}>
        <Container customClass={"nav"}>
            <Link to="/">
            <img src={logo} alt="Calculadora de Valkaria" />
            </Link>
            <ul className={styles.navlist}>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/my-encounters"> Meus Encontros </Link> </li>
                <li> <Link to="/about-jambo"> Jambo Editora </Link> </li>
                <li> <Link to="/about-dev"> Dev </Link> </li>
            </ul>
        </Container>
    </nav>
    )
}

export default Navbar