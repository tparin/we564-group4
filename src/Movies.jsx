import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
const productApiUrl = 'https://api-teams.onrender.com';
export default class Product extends Component {
  state = {
    data: [],
  };
  getData = async () => {
    try {
      await axios
        .get(`${productApiUrl}/movies`)
        .then((response) => {
          let res = response.data;
          this.setState({
            data: res,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Row>
          {data.map(
            ({ id, cover, name, directed_by, starring, opening_on }) => (
              <Col lg="4" md="6" sm="12" key={id}>
                <div style={{ paddingTop: '24px' }}>
                  <Card>
                    <Card.Img variant="top" src={cover} />
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{directed_by}</Card.Text>
                      <Card.Text>{opening_on}</Card.Text>
                      <Card.Text>{starring}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    );
  }
}
