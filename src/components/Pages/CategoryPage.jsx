import React from 'react'
import { Col, Container,Form, Row,Button, Table } from 'react-bootstrap'


const CategoryPage = () => {
  return (
    <Container className="mt-4">
      <h3 className="mb-3">Category Management</h3>

      <Form>
        <Row className="align-items-end">
          <Col md={4}>
            <Form.Group controlId="categoryTitle">
              <Form.Label>Category Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter title"
                required
              />
            </Form.Group>
          </Col>

          <Col md={5}>
            <Form.Group controlId="categoryImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                placeholder="Enter image URL"
                required
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Button type="submit" variant="primary" className="w-100">
              Add Category
            </Button>
          </Col>
        </Row>
      </Form>
        <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>
                    <th>Titile</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </Table>
    </Container>
  )
}

export default CategoryPage