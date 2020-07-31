import React from "react";

// reactstrap components
import {
    Row, Col, Container
} from 'reactstrap';

import { Router, Route, Switch, NavLink } from "react-router-dom";

import Project1 from "components/P1/Project1.jsx";
import Project2 from "components/P2/Project2.jsx";


class Proyectos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <Container>
                <div className="searchBody" style={{ "backgroundColor": "white", "marginBottom": "255px", "paddingBottom": "15px" }}>
                    <Router history={this.props.history}>
                        <Switch>
                            <Route exact path="/search/proyecto" render={props =>
                                <div>
                                    <center>
                                        <i>La Información presentada fue suministrada por las personas involucradas</i>
                                    </center>
                                    <br />
                                    <Col size="sm">
                                        <Row>
                                            <Col md="11">
                                                <h6>
                                                    Sustentabilidad ambiental del manejo y uso del agua en cultivos de arroz de riego. caso estudio: finca arrocera san Jose, municipio Santander de Quilichao, Departamento del Cauca
                                        </h6>
                                            </Col>
                                            <Col md="1">
                                                <NavLink to="/search/proyecto/p1" className="proLink">
                                                    <i className="nc-icon nc-zoom-split" />

                                                </NavLink>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col md="11">
                                                <h6>
                                                    Proyecto de Duvan, Macronutrientes arroz
                                        </h6>
                                            </Col>
                                            <Col md="1">
                                                <NavLink to="/search/proyecto/p2" className="proLink">
                                                    <i className="nc-icon nc-zoom-split" />

                                                </NavLink>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col md="11">
                                                <h6>
                                                    Proyecto de Nelson, Efecto de la lamina del agua
                                        </h6>
                                            </Col>
                                            <Col md="1">

                                                <NavLink to="/search/proyecto/p3" className="proLink">
                                                    <i className="nc-icon nc-zoom-split" />
                                                </NavLink>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col md="11">
                                                <h6>
                                                    Proyecto de Wilmer, Modelacion climatica
                                        </h6>
                                            </Col>
                                            <Col md="1">
                                                <NavLink to="/search/proyecto/p4" className="proLink">
                                                    <i className="nc-icon nc-zoom-split" />
                                                </NavLink>
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            } />
                            <Route exact path="/search/proyecto/p1" component={Project1} />
                            <Route exact path="/search/proyecto/p2" component={Project2} />
                            <Route exact path="/search/proyecto/p3" component={() => <h1>P3</h1>} />
                            <Route exact path="/search/proyecto/p4" component={() => <h1>P4</h1>} />

                            {/* <Route exact path="/search/diagrama/p1/obj2" component={() => <h1>fghfg</h1>} /> */}
                            {/* <Route exact path="/search/diagrama/p1/obj3" component={() => <h1>fhgfg</h1>} /> */}

                        </Switch>
                    </Router>
                </div>
            </Container>
        )
    }
};

export default Proyectos;