import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate, createSearchParams } from "react-router-dom";


function NavBar() {
  const navigate = useNavigate();
  const [q, setQ] = React.useState('')
  function search(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    navigate({
            search: `?${createSearchParams({
              q
            })}`
          });
        }
  return (
    <>
        <Navbar expand={'md'} fixed="top" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <span className='display-6'>
              Project Details
              </span>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Project Details
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 py-2 align-middle pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action1">Backend</Nav.Link>
                  <Nav.Link href="#action2">GitHub</Nav.Link>
                </Nav>
                <Form className="d-flex" onSubmit={search}>
                  <Form.Control
                    type="search"
                    onChange={(e)=>setQ(e.target.value)}
                    placeholder="find me projects..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button type='submit' variant="outline-success">Ask</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;
