import { Button, Col, Container,Form, Row, Table } from "react-bootstrap"

const ProductPage = () => {

    const categories=[{id:1,title:'Earphone'},{id:2,title:'Headphone'},{id:3,title:'TWS'},{id:4,title:'Speaker'},]



  return (

    <Container className='my-5'>
        <h2 className='mb-2'>Product Management</h2>
        <Form >
            <Row className="g-3">
                <Col md={6}>
                <Form.Control
                name="title"
                placeholder="Title"
                required
                />
                </Col>
                <Col md={6}>
                <Form.Control
                name="description"
                placeholder="Description"
                required
                />
                </Col>
                <Col md={6}>
                <Form.Control
                name="price"
                type="number"
                placeholder="Price"
                required
                min="0"
                step='0.01'
                />
                </Col>
                <Col md={6}>
                <Form.Control
                name="imageUrl"
                placeholder="Image Url"
                required
                />
                </Col><Col md={6}>
                <Form.Select
                name="category"
                required
                >
                    <option value=''>Select Category</option>
                    {categories.map((cat)=>(
                        <option key={cat.id} value={cat.title}>{cat.title}</option>
                    ))}
                    </Form.Select>
                </Col>
            <Col xs={12} className="d-grid gap-2">
            <Button type="submit" variant='primary' size="lg">Add Product</Button>
            </Col>
            </Row>
        </Form>
        <div className="table-responsive">
            <Table bordered hover striped>
                <thead className="table-light">
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Categories</th>
                        <th style={{width:'150px'}}>Actions</th>
                    </tr>
                </thead>
            </Table>
        </div>

    </Container>
  )
}

export default ProductPage