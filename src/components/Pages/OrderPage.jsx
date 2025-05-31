import { Container,Table } from "react-bootstrap"
const OrderPage = () => {
  return (
    <Container className="my-5">
      <h3 className="mb-4">Order Management</h3>
        <Table striped bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Total</th>
              <th>Date</th>
              <th>Items</th>
              <th>Update Status</th>
            </tr>
          </thead>
          </Table>
          </Container>

  )
}

export default OrderPage