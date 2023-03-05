import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
export default class Product extends Component {
  state = {
    data: [
      {
        id: '65130273',
        name: 'ปรินทร์ ตรีเอกานุภาพ',
      },
      {
        id: '65230141',
        name: 'สุธินี วรรณทา',
      },
      {
        id: '65130199',
        name: 'วิศวชาติ สินธุวณิก',
      },
      {
        id: '65130274',
        name: 'ประพาฬศักดิ์ พินิจภาคย์',
      },
    ],
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>#</th>
                  <th>รหัส นศ.</th>
                  <th>ชื่อ - นามสกุล</th>
                </tr>
              </thead>
              <tbody>
                {data.map(({ id, name }, index) => (
                  <tr key={index}>
                    <td align="center">{index + 1}</td>
                    <td>{id}</td>
                    <td>{name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
