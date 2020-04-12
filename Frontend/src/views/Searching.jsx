import React from "react";

// reactstrap components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row, Input, Col,
  Container, Table, Alert, InputGroup, InputGroupAddon, InputGroupText, Button
} from 'reactstrap';
// import Axios from "axios";

import { Link } from "react-router-dom";


import Footer from "components/Footer/Footer.jsx";


class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    var words;
    try {
      words = this.props.location.state.words;
    } catch (error) {
      console.log(error);
      words = "error";
    }

    return (
      <div className={words != "error" ? "animated fadeInUpBig faster" : ""}>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">SILAIN | search</NavbarBrand>
          <NavbarToggler />
        </Navbar>
        <Container>
          <div >
            <Row>
              <Col>
                <form>
                  <InputGroup className="no-border">
                    <Input value={words != "error" ? words : "error"} onChange={this.handleInput} name="words" className="inputSearcher" placeholder="Palabras Clave..." />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="nc-icon nc-zoom-split" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </form>

              </Col>
              <Col>
                <Nav className="mr-auto">
                  <NavItem>
                    <NavLink href="/">Restore</NavLink>
                  </NavItem>
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Proveedor
                    </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          prov1
                  </DropdownItem>
                        <DropdownItem>
                          prov2
                  </DropdownItem>
                        <DropdownItem>
                          Prov3
                  </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                  </NavItem>
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Sector
                    </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Cali
                  </DropdownItem>
                        <DropdownItem>
                          Buga
                  </DropdownItem>
                        <DropdownItem>
                          Tulua
                  </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Anhos
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        2000
                  </DropdownItem>
                      <DropdownItem>
                        2001
                  </DropdownItem>
                      <DropdownItem>
                        2002
                  </DropdownItem>
                      <DropdownItem>
                        2003
                  </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>

              </Col>
            </Row>

          </div>
          <div>
            <Alert color="success">
              <h5><b>Resultados:</b></h5>
              <i>Publicaciones: 5</i> <br />
              <i>Datasets: 5</i> <br />
            </Alert>
          </div>
          <Table hover="true">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Proveedor</th>
                <th>Anho</th>
                <th>Sector</th>
                <th>Recurso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Arroz1</td>
                <td>Proveedor</td>
                <td>1997</td>
                <td>Valle</td>
                <td>
                  <a href="/">Descargar</a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Arroz1</td>
                <td>Proveedor</td>
                <td>1997</td>
                <td>Valle</td>
                <td><a href="/">Descargar</a></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Arroz1</td>
                <td>Proveedor</td>
                <td>1997</td>
                <td>Valle</td>
                <td><a href="/">Descargar</a></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Arroz1</td>
                <td>Proveedor</td>
                <td>1997</td>
                <td>Valle</td>
                <td><a href="/">Descargar</a></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Arroz1</td>
                <td>Proveedor</td>
                <td>1997</td>
                <td>Valle</td>
                <td><a href="/">Descargar</a></td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Footer />
      </div>
    )
  }
};

export default Searching;