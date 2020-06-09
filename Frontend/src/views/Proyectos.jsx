import React from "react";

// reactstrap components
import {
    Row, Col,
} from 'reactstrap';

import { Router, Route, Switch, NavLink } from "react-router-dom";

import Project1 from "components/Project1.jsx";

class Proyectos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <Router history={this.props.history}>
                <Switch>
                    <Route exact path="/search/proyecto" render={props =>
                        <div>
                            <center>
                                <i>La informacion presentada fue suministrada por las personas involucradas</i>
                            </center>
                            <br />
                            <Col size="sm">
                                <Row>
                                    <Col md="10">
                                        <h5>
                                            Sustentabilidad ambiental del manejo y uso del agua en cultivos de arroz de riego. caso estudio: finca arrocera san Jose, municipio Santander de Quilichao, Departamento del Cauca
                                        </h5>
                                    </Col>
                                    <Col md="2">
                                        <NavLink to="/search/proyecto/p1" className="proLink">Explorar</NavLink>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10">
                                        <h5>
                                            Proyecto de Duvan, Macronutrientes arroz
                                        </h5>
                                    </Col>
                                    <Col md="2">
                                        <NavLink to="/search/proyecto/p2" className="proLink">Explorar</NavLink>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10">
                                        <h5>
                                            Proyecto de Nelson, Efecto de la lamina del agua
                                        </h5>
                                    </Col>
                                    <Col md="2">
                                        <NavLink to="/search/proyecto/p3" className="proLink">Explorar</NavLink>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10">
                                        <h5>
                                            Proyecto de Wilmer, Modelacion climatica
                                        </h5>
                                    </Col>
                                    <Col md="2">
                                        <NavLink to="/search/proyecto/p4" className="proLink">Explorar</NavLink>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    } />
                    <Route exact path="/search/proyecto/p1" component={Project1} />
                    <Route exact path="/search/proyecto/p2" component={() => <h1>P2</h1>} />
                    <Route exact path="/search/proyecto/p3" component={() => <h1>P3</h1>} />
                    <Route exact path="/search/proyecto/p4" component={() => <h1>P4</h1>} />

                    {/* <Route exact path="/search/diagrama/p1/obj2" component={() => <h1>fghfg</h1>} /> */}
                    {/* <Route exact path="/search/diagrama/p1/obj3" component={() => <h1>fhgfg</h1>} /> */}

                </Switch>
            </Router>
        )
    }
};

export default Proyectos;