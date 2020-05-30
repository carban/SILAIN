import React from "react";

// reactstrap components
import {
  Row, Col,
  Container
} from 'reactstrap';

import { Router, Route, Switch, NavLink } from "react-router-dom";
import Footer from "components/Footer/Footer.jsx";

import SNavBar from "components/SNavBar.jsx";

import Clave from "./Clave.jsx";
import Propiedad from "./Propiedad.jsx";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // HANDELRS SOBRE LOS DIFERENTES TIPOS DE BUSQUEDA

  showTypeSearch = type => {
    // this.setState({ reloadFilters: true }, () => {
    this.setState({ changedLink: false })
    var types = { ...this.state.search_types };
    for (let i in types) {
      types[i] = false;
    }
    types[type] = true;
    this.setState({
      search_types: types,
      words: "",
    })
    // console.log(this.state.results);
    // })
  }

  componentDidMount() {
    // this.newBasicSearch();
  }

  render() {
    return (
      <div>
        <SNavBar />
        <Container>
          <div>
            <center>
              <Col md="12">
                <Row>
                  <Col sm="3" md="3" lg="3">
                    <NavLink to="/search/clave"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "blue",
                        fontSize: "15px"
                      }} title="Realiza busquedas escribiendo palabras clave">
                      Palabras Clave
                      </NavLink>
                  </Col>
                  <Col sm="3" md="3" lg="3">
                    <NavLink to="/search/propiedad"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "blue",
                        fontSize: "15px"
                      }} title="Realiza busquedas seleccionando una propiedad">
                      Propiedades
                    </NavLink>
                  </Col>
                  <Col sm="3" md="3" lg="3">
                    <NavLink to="/search/mapa"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "blue",
                        fontSize: "15px"
                      }} title="Realiza busquedas explorando un mapa">
                      Mapa
                    </NavLink>
                  </Col>
                  <Col sm="3" md="3" lg="3">
                    <NavLink to="/search/diagrama"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "blue",
                        fontSize: "15px"
                      }} title="Realiza busquedas explorando diagramas">
                      Diagramas
                    </NavLink>
                  </Col>
                </Row>
              </Col>
            </center>
          </div>
          <br />
          <Router history={this.props.history}>
            <Switch>
              <Route path="/search/clave" component={Clave} />
              <Route path="/search/propiedad" component={Propiedad} />
              <Route path="/search/mapa" component={() => (<h1>C3</h1>)} />
              <Route path="/search/diagrama" component={() => (<h1>C4</h1>)} />
            </Switch>
          </Router>
        </Container>
        <Footer />
      </div>
    )
  }
};

export default Search;