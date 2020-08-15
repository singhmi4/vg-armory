import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { Container, Row, Col, Button } from "react-bootstrap"
import Layout from "../components/Layout/Layout"

const Product = ({
  data: {
    product: {
      price,
      title,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-5">{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Image fixed={fixed} alt={title} />
          </Col>
          <Col md={4}>
            <p className="text-justified">{info}</p>
            <h3>${price}</h3>
            <Button variant="success">Add to Inventory</Button>
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
