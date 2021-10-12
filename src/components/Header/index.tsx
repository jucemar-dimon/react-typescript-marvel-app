import * as React from "react";

import logo from "../../assets/images/logo-marvel-app.svg";
import { Container } from "./styles";

const Header = (): JSX.Element => {
    return (
        <Container>
            <img src={logo} alt="Logotipo Marvel" />
        </Container>
    );
};

export default Header;
