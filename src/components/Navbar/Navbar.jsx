import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import styles from "./Navbar.module.css"


const NavbarComp = () => {

  return (
    <Navbar className={styles.customNav}>
      <Navbar.Brand>
        <Link className={styles.text} to="/">
          Video Game Armory
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link className={styles.text} to="/products/">
          Products 
        </Link>
        <Link className={styles.text} to="/products/">
           | Cart <span>0</span>
        </Link>
      </Nav>
    </Navbar>

  )
}

export default NavbarComp
