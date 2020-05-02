import React from "react";

// reactstrap components
import {
  // Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  // NavbarText,
  Row, Input, Col,
  Container, Table, Alert, InputGroup, InputGroupAddon, InputGroupText,
  // Button
} from 'reactstrap';
import axios from "axios";

// import { Link } from "react-router-dom";


import Footer from "components/Footer/Footer.jsx";


class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.location.state.words,
      toggle_cat1: false,
      toggle_cat2: false,
      toggle_cat3: false,
      toggle_cat4: false,
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  change_toggle1 = () => {
    this.setState({ toggle_cat1: !this.state.toggle_cat1 });
  }

  change_toggle2 = () => {
    this.setState({ toggle_cat2: !this.state.toggle_cat2 });
  }

  change_toggle3 = () => {
    this.setState({ toggle_cat3: !this.state.toggle_cat3 });
  }

  change_toggle4 = () => {
    this.setState({ toggle_cat4: !this.state.toggle_cat4 });
  }

  componentDidMount(){

    const basicURL = "http://localhost:8000/basic/search";

    axios.post(basicURL, {words: this.state.words})
      .then(res => {
        console.log(res.data.result);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    return (
      // className={words != "error" ? "animated fadeInUpBig faster" : ""}
      <div>
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
                    <Input onChange={this.handleInput} value={this.state.words !== "error" ? this.state.words : "error"} name="words" className="inputSearcher" placeholder="Palabras Clave..." />
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
                    <Dropdown name="toggle_cat1" isOpen={this.state.toggle_cat1} toggle={this.change_toggle1}>
                      <DropdownToggle nav caret>Proveedor</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>

                  <NavItem>
                    <Dropdown name="toggle_cat2" isOpen={this.state.toggle_cat2} toggle={this.change_toggle2}>
                      <DropdownToggle nav caret>Sector</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>

                  <NavItem>
                    <Dropdown name="toggle_cat3" isOpen={this.state.toggle_cat3} toggle={this.change_toggle3}>
                      <DropdownToggle nav caret>Anhos</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>

                  <NavItem>
                    <Dropdown name="toggle_cat4" isOpen={this.state.toggle_cat4} toggle={this.change_toggle4}>
                      <DropdownToggle nav caret>cat4</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                
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
          <Table hover={true}>
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