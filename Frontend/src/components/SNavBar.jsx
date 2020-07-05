import React from "react";

import {
    Navbar,
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
                <NavbarBrand>
                  <NavLink to="/">
                    SILAIN | search
                  </NavLink>
                </NavbarBrand>
                <Col md="12">
                <Row>
                  <Col>
                    <NavLink to="/search/clave"
                      className="silain_yellow_links"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Realiza busquedas escribiendo palabras clave">
                      <i className="nc-icon nc-align-left-2" style={{ "fontSize": "18px" }}></i>
                      Palabras Clave
                      </NavLink>
                  </Col>
                  <Col>
                    <NavLink to="/search/propiedad"
                      className="silain_yellow_links"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Realiza busquedas seleccionando una propiedad">
                      <i className="nc-icon nc-bullet-list-67" style={{ "fontSize": "18px" }}></i>
                      Propiedades
                    </NavLink>
                  </Col>
                  <Col>
                    <NavLink to="/search/mapa"
                      className="silain_yellow_links"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Realiza busquedas explorando un mapa">
                      <i className="nc-icon nc-pin-3" style={{ "fontSize": "20px" }}></i>
                      Mapa
                    </NavLink>
                  </Col>
                  <Col>
                    <NavLink to="/search/proyecto"
                      className="silain_yellow_links"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Realiza busquedas explorando proyectos">
                      <i className="nc-icon nc-bulb-63" style={{ "fontSize": "20px" }}></i>
                      Proyectos
                    </NavLink>
                  </Col>
                  <Col>
                    <NavLink to="/login"
                      className="silain_yellow_links"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#F47C00",
                        fontSize: "15px"
                      }} title="Logueate en la plataforma">
                      <i className="nc-icon nc-circle-10" style={{ "fontSize": "20px" }}></i>
                      {/* Login */}
                    </NavLink>
                  </Col>
                </Row>
              </Col>
            </Navbar>
        )
    }
}

export default SNavBar;