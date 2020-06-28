import React from "react";

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Row, Col
} from "reactstrap";

import { NavLink } from "react-router-dom";


class SNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Navbar color="dark" expand="md">
                <NavbarBrand href="/">SILAIN | search</NavbarBrand>
                <Col md="12">
                <Row>
                  <Col sm="3" md="3" lg="3">

                    <NavLink to="/search/clave"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Realiza busquedas escribiendo palabras clave">
                      Palabras Clave
                      </NavLink>
                  </Col>
                  <Col sm="3" md="3" lg="3">
                    <NavLink to="/search/propiedad"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Realiza busquedas seleccionando una propiedad">
                      Propiedades
                    </NavLink>
                  </Col>
                  <Col sm="3" md="3" lg="3">
                    <NavLink to="/search/mapa"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Realiza busquedas explorando un mapa">
                      Mapa
                    </NavLink>
                  </Col>
                  <Col sm="3" md="3" lg="3">
                    <NavLink to="/search/proyecto"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Realiza busquedas explorando proyectos">
                      Proyectos
                    </NavLink>
                  </Col>
                </Row>
              </Col>
            </Navbar>
        )
    }
}

export default SNavBar;