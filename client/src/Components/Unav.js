import React from 'react'
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

function Unav() {
    const navigate = useNavigate()
    const logout = () => {
        navigate("/")
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-success" onClick={logout}>Logout</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Unav