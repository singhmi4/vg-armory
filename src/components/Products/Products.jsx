import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "./Products.module.css"

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulVgArmory {
        nodes {
          id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          price
          slug
          title
        }
      }
    }
  `)

  const {
    allContentfulVgArmory: { nodes: products },
  } = data
  return (
    <Container>
      <Row className={styles.products}>
        {products.map(product => {
          return (
            <Col className="item" md={4} key={product.id}>
              <Link to={`/products/${product.slug}`}>
                <Image fluid={product.image.fluid} alt={product.title}></Image>
              </Link>
              <h6>{product.title}</h6>
              <p>${product.price}</p>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Products
