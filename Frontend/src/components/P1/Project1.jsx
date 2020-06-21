import React from "react";

// import {
//     Row, Col,
//     Button
// } from 'reactstrap';// used for making the prop types of this component

import { Accordion, Card } from "react-bootstrap";

import diagrams from "./diagrams.js";

import mermaid from 'mermaid';

import Eimage from "./Eimage.png";
import Fimage from "./Fimage.png";
import Gimage from "./Gimage.png";
import O2 from "./O2.png";


class Project1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: "",
            showObj: "",
        }
    }

    diagramEvent(e) {
        this.setState({ showObj: e });
    }

    showDiagram(d) {

        this.setState({ "obj": d });

        var output;

        if (d[0] === "O") {
            output = document.getElementById('output');
        } else {
            output = document.getElementById('outputResults');
        }

        var config = {
            startOnLoad: true,
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'cardinal',
            },
            securityLevel: 'loose',
        };

        mermaid.initialize(config);

        var graphDefinition;

        switch (d) {
            case "O1":
                graphDefinition = diagrams.o1;
                break;
            case "O2":
                graphDefinition = diagrams.o2;
                break;
            case "O3":
                graphDefinition = diagrams.o3;
                break;
            case "R1":
                graphDefinition = diagrams.r1;
                break;
            case "R2":
                graphDefinition = diagrams.r2;
                break;
            case "R3":
                graphDefinition = diagrams.r3;
                break;
            default:
                break;
        }

        mermaid.render('theGraph', graphDefinition, (svgCode, bindFunctions) => {
            output.innerHTML = svgCode;
            bindFunctions()
        });
    }

    componentDidMount() {
        window.foo = e => { this.diagramEvent(e); }
    }

    render() {
        // console.log(this.props.history)
        return (
            <div className="animated bounceInLeft fast">
                <center>
                    <h5>
                        SUSTENTABILIDAD AMBIENTAL DEL MANEJO Y USO DEL AGUA EN CULTIVOS DE ARROZ DE RIEGO. CASO ESTUDIO: FINCA ARROCERA SAN JOSÉ, MUNICIPIO DE SANTANDER DE QUILICHAO, DEPARTAMENTO DEL CAUCA.
                    </h5>
                    <b>
                        Trabajo de Grado presentado como requisito parcial para optar por el título de <br></br>
                        Magister en Desarrollo Sustentable con énfasis en Ecosistemas Acuáticos
                    </b>
                </center>
                <b>Realizado por:</b> <br />
                    Claudia Patricia Vidal Puerta <br />
                <b>Director:</b> <br />
                    MAURICIO EDILBERTO RINCÓN ROMERO <br />
                    Ingeniero Catastral y Geodesta M.Sc. Ph.D. <br />
                <b>Codirector:</b> <br />
                    OSCAR BUITRAGO BERMÚDEZ <br />
                    Ingeniero Agrícola M.Sc. Ph.D. <br />
                <hr />
                <br />
                <Accordion>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h5 style={{ "cursor": "pointer" }}>Resumen</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div style={{ "textAlign": "justify" }}>
                                El cultivo de arroz inundado es uno de los agroecosistemas que ejerce mayor presión sobre el bien hídrico. Por ello, la evaluación de la sustentabilidad ambiental a partir del concepto de huella hídrica es importante ya que permite determinar cómo el manejo y uso del agua en el cultivo puede afectar la disponibilidad tanto en cantidad como en calidad. De ahí que, esta investigación parte de caracterizar el manejo y uso del agua en la producción primaria del arroz, el cual se define por las dimensiones culturales de los agricultores; posteriormente, se cuantifican los tres (3) componentes del indicador biofísico de sustentabilidad Huella Hídrica y, finalmente, se determinan los efectos ambientales mediante índices de sustentabilidad e indicadores de calidad y contaminación del agua. El estudio se centró en la finca San José perteneciente a la arrocera La Esmeralda S.A.S., ubicada en la zona plana del municipio de Santander de Quilichao – Departamento del Cauca durante el periodo comprendido entre septiembre de 2018 - febrero de 2019. Los resultados evidencian que el manejo y uso del agua está determinado por la percepción de abundancia del bien hídrico que tiene el agricultor, hecho que conlleva a su excesivo uso para mantener altos rendimientos y disminuir la aplicación de agroquímicos. Por otro lado, la cuantificación de la huella hídrica en el periodo indicado fue de  referida a  de , cero (0) de  y  de , mostrando que las aguas verdes, en la temporada de alto régimen pluviométrico, satisfacen las necesidades hídricas de la planta de arroz, por lo cual no es necesario el riego. No obstante, a partir del diseño e implementación de la estación automática medidora de caudal se encontró que se incorporaron  de agua de riego extraídos de los ríos y drenajes próximos para establecer la inundación permanente y garantizar el control residual de malezas; de este volumen  retornaron a las fuentes hídricas naturales. Finalmente, la evaluación de la sustentabilidad ambiental del manejo y uso del agua verde, azul y gris muestra una condición crítica de contaminación por agentes microbiológicos, compuestos químicos y un estado hipertrófico por el alto contenido de nutrientes, con lo cual se contribuye al deterioro progresivo de la calidad del agua cuando se reintegran a los ríos.
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <h5 style={{ "cursor": "pointer" }}>Metodologia</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div>
                                <h6>Objetivos</h6>
                                <ul>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={this.showDiagram.bind(this, "O1")}>
                                            Caracterizacion del manejo y uso del agua en la unidad agricola
                                        </button>
                                    </li>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={this.showDiagram.bind(this, "O2")}>
                                            Cuantificacion de la HHverde, HHazul, HHgris
                                        </button>
                                    </li>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={this.showDiagram.bind(this, "O3")}>
                                            Definir los efectos ambientales de la HHverde, HHazul, HHgris
                                        </button>
                                    </li>
                                </ul>
                                <center>
                                    < div id="output" />
                                    {
                                        this.state.obj === "O1" ?
                                            <div>
                                                <br />
                                                <hr />
                                                {
                                                    this.state.showObj === "SS1O1" ? <img width="800px" height="480px" src={Eimage} alt="" /> : true
                                                }
                                                {
                                                    this.state.showObj === "SS2O1" ? <img width="800px" height="480px" src={Fimage} alt="" /> : true
                                                }
                                                {
                                                    this.state.showObj === "SS3O1" ? <img width="800px" height="480px" src={Gimage} alt="" /> : true
                                                }
                                            </div>
                                            : true
                                    }
                                    {
                                        this.state.obj === "O2" ?
                                            <div>
                                                <br />
                                                <hr />
                                                {
                                                    this.state.showObj === "SS1O2" || this.state.showObj === "SS2O2" ? <img width="700px" height="480px" src={O2} alt="" /> : true
                                                }
                                                <br />
                                            </div>
                                            : true
                                    }
                                    {
                                        this.state.obj === "O3" ?
                                            <div>
                                                <br />
                                                <hr />
                                                {
                                                    this.state.showObj === "E" ? <img width="700px" height="480px" src={Eimage} alt="" /> : true
                                                }
                                                {
                                                    this.state.showObj === "F" ? <img width="700px" height="480px" src={Fimage} alt="" /> : true
                                                }
                                                {
                                                    this.state.showObj === "G" ? <img width="700px" height="480px" src={Gimage} alt="" /> : true
                                                }
                                                <br />
                                            </div>
                                            : true
                                    }
                                </center>
                            </div>

                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <h5 style={{ "cursor": "pointer" }}>Resultados</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <div>
                                <h6>Resultados Por onjetivo</h6>
                                <ul>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={this.showDiagram.bind(this, "R1")}>
                                            Caracterizacion del manejo y uso del agua en la unidad agricola
                                        </button>
                                    </li>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={this.showDiagram.bind(this, "R2")}>
                                            Cuantificacion de la HHverde, HHazul, HHgris
                                        </button>
                                    </li>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={this.showDiagram.bind(this, "R3")}>
                                            Definir los efectos ambientales de la HHverde, HHazul, HHgris
                                        </button>
                                    </li>
                                </ul>
                                <center>
                                    < div id="outputResults" />
                                </center>
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <h5 style={{ "cursor": "pointer" }}>Conclusiones</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti suscipit ea modi porro iste ut, optio placeat harum eius exercitationem, veniam aperiam! Autem, eaque animi voluptates sed praesentium reprehenderit natus.
                            </div>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
            </div>
        )
    }
}

export default Project1;