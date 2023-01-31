import { Container, Navbar as NavbarBootstrap } from "react-bootstrap";
import LogoNavbar from "component/atoms/LogoNavbar";
import NavbarMenu from "component/molecules/NavbarMenu";

const Navbar = ({navbarLinks}) => {

    return <NavbarBootstrap collapseOnSelect
                            expand="lg"
                            bg="light"
                            variant="light">
        <Container>
            <LogoNavbar/>
            <NavbarBootstrap.Toggle/>
            <NavbarMenu navbarLinks={navbarLinks}/>
        </Container>
    </NavbarBootstrap>
};

export default Navbar;