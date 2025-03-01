import { Navbar, Container, Nav} from "react-bootstrap";
// import '../NavStudent/NavStudent.css'
// import {Link} from 'react-router-dom'

const NavStudent = ()=>{
    return (
        <Navbar collapseOnSelect expand="lg" style={{zIndex:1}} >
            <Container>
                <Navbar.Brand href="/" className="text-white" >MyGrades</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav >
                    <Nav.Link href="AdminLogin" className="px-5 nav-opt">Login</Nav.Link>
                    <Nav.Link href="upload" className="px-5 nav-opt">Upload</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavStudent;