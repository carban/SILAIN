import React from "react";

// reactstrap components
import {
  Row, Col
} from 'reactstrap';

import { Provider } from "react-redux";
import store from "../store";

import { Router, Route, Switch, NavLink } from "react-router-dom";
import Footer from "components/Footer.jsx";

import SNavBar from "components/SNavBar.jsx";

import Clave from "views/Clave.jsx";
import Propiedad from "views/Propiedad.jsx";
import TheMap from "views/TheMap.jsx";
import Proyectos from "views/Proyectos.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <SNavBar />
          <div>
            <center>
              <Col md="12">
                <Row>
                  <Col sm="3" md="3" lg="3">

                    <NavLink to="/search/clave"
                      className="silain_yellow_links"
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
                      className="silain_yellow_links"
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
                      className="silain_yellow_links"
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
                      className="silain_yellow_links"
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
            </center>
          </div>
          <br />
          <Router history={this.props.history}>
            <Switch>
              <Route path="/search/clave" component={Clave} />
              <Route path="/search/propiedad" component={Propiedad} />
              <Route path="/search/mapa" component={TheMap} />
              <Route path="/search/proyecto" component={Proyectos} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </Provider>
    )
  }
};

export default Search;