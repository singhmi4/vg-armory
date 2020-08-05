import React from "react"
import NavbarComp from "../Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComp />
      <main>{children}</main>
    </>
  )
}

export default Layout
