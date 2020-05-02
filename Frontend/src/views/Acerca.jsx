import React from "react";

// // reactstrap components
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText,
//     Row, Input, Col,
//     Container, Table
// } from 'reactstrap';
// // import Axios from "axios";

// import Footer from "components/Footer/Footer.jsx";

import alex from "alex.jpeg";


class Acerca extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Alex</h1>
                    <img src={alex} alt="description"></img>
                </center>
            </div>
        )
    }
};

export default Acerca;