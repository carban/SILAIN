import React from "react";

// import {
//     Row, Col,
//     Button
// } from 'reactstrap';// used for making the prop types of this component

import { NavLink } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";

class Project1 extends React.Component {
    render() {
        // console.log(this.props.history)
        return (
            <div className="animated bounceInLeft fast">
                <center>
                    <h6>
                        Sustentabilidad ambiental del manejo y uso del agua en cultivos de arroz de riego. caso estudio: finca arrocera san Jose, municipio Santander de Quilichao, Departamento del Cauca
                </h6>
                </center>
                <hr />
                <br />
                <Accordion>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h5 style={{"cursor": "pointer"}}>Resumen</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <NavLink to="/search/diagrama/p1/">Explorar</NavLink>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <h5 style={{"cursor": "pointer"}}>Metodologia</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div>
                                <h6>Objetivos</h6>
                                <ul>
                                    <li>
                                        <NavLink to="/search/diagrama/p1/obj1">
                                            Caracterizacion del manejo y uso del agua en la unidad agricola
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/search/diagrama/p1/obj2">
                                            Cuantificacion de la HHverde, HHazul, HHgris
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/search/diagrama/p1/obj3">
                                            Definir los efectos ambientales de la HHverde, HHazul, HHgris
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <h5 style={{"cursor": "pointer"}}>Resultados</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <NavLink to="/search/diagrama/p1/">Explorar</NavLink>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <h5 style={{"cursor": "pointer"}}>Conclusiones</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <NavLink to="/search/diagrama/p1/">Explorar</NavLink>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
            </div>
        )
    }
}


export default Project1;
