import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import styles from "./Navbar.module.css"

const NavbarComp = () => {
  return (
    <Navbar className={styles.customNav}>
      <Navbar.Brand>
        <Link to="/">Video Game Armory</Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/products/">Products</Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarComp
