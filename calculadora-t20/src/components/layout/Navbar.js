import { Link } from "react-router-dom"

import Container from "./Container"
import logo from '../../img/valkaria.png'
import styles from './Navbar.module.css'
function Navbar() {
    return (
    <nav className={styles.navbar}>
        <Container>
            <Link to="/">
            <img src={logo} alt="Calculadora de Valkaria" width="15%"/>
            </Link>
            <ul className={styles.navlist}>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/about-dev"> Dev </Link> </li>
                <li> <Link to="/about-jambo"> Jambo Editora </Link> </li>
                <li> <Link to="/my-encounters"> Meus Encontros </Link> </li>
            </ul>
        </Container>
    </nav>
    )
}

export default Navbar