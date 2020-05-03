import React from "react";

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from "reactstrap";

class SNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/">SILAIN | search</NavbarBrand>
                <NavbarToggler />
            </Navbar>
        )
    }
}

export default SNavBar;