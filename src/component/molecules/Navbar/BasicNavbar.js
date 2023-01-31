import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import BasicNav from 'component/molecules/Navs/BasicNavs/BasicNav';
import Image from "next/image";
import logoPegadaianSyariah from "asset/image/logo-pegadaian-syariah.png"

function BasicNavbar() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#">
                <Image src={logoPegadaianSyariah} height="48" alt="Logo Pegadaian Syariah"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <BasicNav />
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default BasicNavbar;