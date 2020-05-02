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
      word_searched: "",
      toggle_cat1: false,
      toggle_cat2: false,
      toggle_cat3: false,
      toggle_cat4: false,
      results: [],
      counts_tipos: {}
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

  newBasicSearch = e => {

    const basicURL = "http://localhost:8000/basic/search";

    axios.post(basicURL, { words: this.state.words })
      .then(res => {
        this.setState({ results: res.data.result, counts_tipos: res.data.counts, word_searched: this.state.words });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.newBasicSearch();
  }

  componentDidMount() {
    this.newBasicSearch();
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
                <form onSubmit={this.handleSubmit}>
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

                  {/* <NavItem>
                    <NavLink href="/">Restore</NavLink>
                  </NavItem> */}

                  <NavItem>
                    <Dropdown name="toggle_cat1" isOpen={this.state.toggle_cat1} toggle={this.change_toggle1}>
                      <DropdownToggle nav caret>Categoria</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>

                  <NavItem>
                    <Dropdown name="toggle_cat2" isOpen={this.state.toggle_cat2} toggle={this.change_toggle2}>
                      <DropdownToggle nav caret>Subcategoria</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>

                  {/* <NavItem>
                    <Dropdown name="toggle_cat3" isOpen={this.state.toggle_cat3} toggle={this.change_toggle3}>
                      <DropdownToggle nav caret>Municipio</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem> */}

                  <NavItem>
                    <Dropdown name="toggle_cat4" isOpen={this.state.toggle_cat4} toggle={this.change_toggle4}>
                      <DropdownToggle nav caret>Tipo</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                        <DropdownItem>prov1</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>

                  <NavItem>
                    <Dropdown name="toggle_cat4" isOpen={this.state.toggle_cat4} toggle={this.change_toggle4}>
                      <DropdownToggle nav caret>Formato</DropdownToggle>
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
              <h5><b>Resultados para "{this.state.word_searched}": </b>{this.state.results.length}</h5>
              <b>Archivo crudo: {this.state.counts_tipos.AC}</b> <br />
              <b>Archivo procesado: {this.state.counts_tipos.AP}</b> <br />
              <b>Imagen cruda: {this.state.counts_tipos.IC}</b> <br />
              <b>Imagen procesada: {this.state.counts_tipos.IP}</b> <br />
              <b>Compilación: {this.state.counts_tipos.C}</b> <br />

            </Alert>
          </div>
          <Table hover={true}>
            <tbody>
              {
                this.state.results.map((e, i) => (
                  <tr>
                    <th key={i} scope="row">{i + 1}</th>
                    <td>
                      <b>Titulo: </b>{e.titulo} <br />
                      <b>Publicador: </b>{e.publicador}
                    </td>
                    <td>
                      <b>Tipo: </b>{e.tipo} <br />
                      <b>D: </b>{e.resumen}
                    </td>
                    <td>
                      <b>Formato: </b>{e.formato} <br />
                      <b>Tamano: </b>{e.tamano}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Container>
        <Footer />
      </div>
    )
  }
};

export default Searching;