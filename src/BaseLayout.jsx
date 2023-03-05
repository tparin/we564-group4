import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Report from './Report';
import Movies from './Movies';
import Members from './Members';
import NoPage from './NoPage';
export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Navbar
          variant="dark"
          style={{
            borderRadius: '8px',
            margin: '12px',
            background:
              'linear-gradient(90deg, rgba(36,0,16,1) 0%, rgba(121,9,39,1) 25%, rgba(0,120,255,1) 100%)',
          }}
        >
          <Container>
            <Navbar.Brand href="/">DPU | WE564</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/members">Members</Nav.Link>
            </Nav>
            <div style={{ color: 'white' }}>
              Project Team , Full Service | Group 4
            </div>
          </Container>
        </Navbar>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Movies />} />
                <Route path="movies" element={<Movies />} />
                <Route path="members" element={<Members />} />
                <Route path="report" element={<Report />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}
