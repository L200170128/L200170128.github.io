import Link from "next/link";
import { Navbar } from "react-bootstrap";
import Image from "next/image";
import logoPegadaianSyariah from "asset/image/logo-pegadaian-syariah.png"

const LogoNavbar = () => {
    return <Link href="/"
                 passHref
                 legacyBehavior>
        <Navbar.Brand>
            <Image src={logoPegadaianSyariah} height="30" alt="Logo Pegadaian Syariah"/>
        </Navbar.Brand>
    </Link>
}

export default LogoNavbar;