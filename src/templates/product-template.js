import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { Container, Row, Col, Button } from "react-bootstrap"

import Layout from "../components/Layout/Layout"
import AddToCartBtn from "../components/Buttons/AddToCardBtn"


const Product = ({
  data: {
    product: {
      price,
      title,
      image: { fixed },
      info: { info },
    },
  },
}, props) => {

  console.log(props);
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-5">{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Image fixed={fixed} alt={title} />
          </Col>
          <Col md={6}>
            <p className="text-justify">{info}</p>
            <h3 className="text-center">${price}</h3>
            <Row></Row>
            <Col className="text-center">
              <AddToCartBtn />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <Link to="/products">
              <Button variant="warning">Back to the Armory</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulVgArmory(slug: { eq: $slug }) {
      title
      info {
        info
      }
      price
      image {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default Product
