import React from "react"
import Layout from "../components/Layout/Layout"
import Products from "../components/Products/Products"
import { Row, Col } from "react-bootstrap"

const products = () => {
  return (
    <Layout>
      <Row>
        <Col className="text-center my-5">
          <h3>Choose Your Weapon</h3>
        </Col>
      </Row>
      <Products />
    </Layout>
  )
}

export default products
