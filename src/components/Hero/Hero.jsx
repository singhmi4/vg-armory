import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from "./Hero.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      indexedImage: file(relativePath: { eq: "image1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={data.indexedImage.childImageSharp.fluid}
      className={styles.backgroundImage}
    >
      <Container className={styles.container}>
        <h1 className={styles.title}> Faux Videogame Armory Shop</h1>
        <p className={styles.subtext}>It's too dangerous to go alone...</p>
        <p>
          <Link to="/products/">
            <Button variant="warning">...Take This</Button>
          </Link>
        </p>
      </Container>
    </BackgroundImage>
  )
}

export default Hero
