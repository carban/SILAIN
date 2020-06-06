import React from "react";

import {
    Row, Col,
    Button
} from 'reactstrap';// used for making the prop types of this component

import { Router, Route, Switch, NavLink } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";

import Footer from "./Footer.jsx";

class Project1 extends React.Component {
    render() {
        return (
            <div className="animated bounceInLeft fast">
                <Route exact path="/search/diagrama/p1" render={props =>
                    <div>
                        <br />
                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Click me!
                                        </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Click me!
                                        </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Col md="5">
                            <Row>
                                <Col md="10">
                                    <h5>
                                        Resumen
                                        </h5>
                                </Col>
                                <Col md="2">
                                    <NavLink to="/search/diagrama/p1/meto">Explorar</NavLink>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="10">
                                    <h5>
                                        Metodologia
                                        </h5>
                                </Col>
                                <Col md="2">
                                    <NavLink to="/search/diagrama/p1/meto2">Explorar</NavLink>
                                </Col>

                            </Row>
                            <Row>
                                <Col md="10">
                                    <h5>
                                        Resultados
                                        </h5>
                                </Col>
                                <Col md="2">
                                    <NavLink to="/search/diagrama/p1/meto3">Explorar</NavLink>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="10">
                                    <h5>
                                        Conclusiones
                                        </h5>
                                </Col>
                                <Col md="2">
                                    <NavLink to="/search/diagrama/p1/meto4">Explorar</NavLink>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                } />
            </div>
        )
    }
}


export default Project1;
