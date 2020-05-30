import React from "react";

// reactstrap components
import {
  Row, Col,
  Container
} from 'reactstrap';

import { Router, Route, Switch, NavLink } from "react-router-dom";
import Footer from "components/Footer.jsx";

import SNavBar from "components/SNavBar.jsx";

import Clave from "views/Clave.jsx";
import Propiedad from "views/Propiedad.jsx";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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
              <Route path="/search/mapa" component={() => (<h1>Mapa</h1>)} />
              <Route path="/search/diagrama" component={() => (<h1>Diagrama</h1>)} />
            </Switch>
          </Router>
        </Container>
        <Footer />
      </div>
    )
  }
};

export default Search;