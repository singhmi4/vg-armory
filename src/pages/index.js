import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Products from "../components/Products/Products"
import { Row, Col } from "react-bootstrap"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Row>
        <Col className="text-center mt-5">
          <h3>Featured Collection</h3>
        </Col>
      </Row>
      <Products />
    </Layout>
  )
}
