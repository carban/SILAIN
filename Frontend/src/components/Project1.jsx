import React from "react";

// import {
//     Row, Col,
//     Button
// } from 'reactstrap';// used for making the prop types of this component

import { NavLink } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";

import mermaid from 'mermaid';

import Eimage from "./Eimage.png";
import Fimage from "./Fimage.png";
import Gimage from "./Gimage.png";


class Project1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: ""
        }
    }

    diagramEvent = e => {
        this.setState({ show: e });
    }

    componentDidMount() {
        var output = document.getElementById('output');
        // var output2 = document.getElementById('output2');


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

        window.foo = e => { this.diagramEvent(e); }

        var graphDefinition = `
        graph TD
        A["Caracterizacion del manejo y uso del agua en la unidad agricola"];
        A-->B["Manejo del Agua"];
        A-->C["Uso del Agua"];
        A-->D["Aspectos culturales"];

        B-->E["Identificacion y descripcion de las</br> practicas agricolas de regadiio</br><b><i>Click para mas detalles</i></b>"];
        C-->F["Calculo del volumen de agua</br> superficial que ingresa a la</br> parcela eperimental</br><b><i>Click para mas detalles</i></b>"];
        D-->G["Descripcion de significados</br> culturales que definen el</br> manejo y uso del agua en el</br> cultivo de arroz</br><b><i>Click para mas detalles</i></b>"];
        click E foo
        click F foo
        click G foo
        `;

        mermaid.render('theGraph', graphDefinition, (svgCode, bindFunctions) => {
            output.innerHTML = svgCode;
            bindFunctions()
        });

        // mermaid.render('theGraph2', graphDefinition, (svgCode, bindFunctions) => {
        //     output2.innerHTML = svgCode;
        //     bindFunctions()
        // });
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
                        Trabajo de Grado presentado como requisito parcial para optar por el título de
                        Magister en Desarrollo Sustentable con énfasis en Ecosistemas Acuáticos
                    </b>
                </center>
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
                            {/* <NavLink to="/search/diagrama/p1/">Explorar</NavLink> */}
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
                                        {/* <NavLink to="/search/diagrama/p1/obj1"> */}
                                            Caracterizacion del manejo y uso del agua en la unidad agricola
                                        {/* </NavLink> */}
                                    </li>
                                    <li>
                                        {/* <NavLink to="/search/diagrama/p1/obj2"> */}
                                            Cuantificacion de la HHverde, HHazul, HHgris
                                        {/* </NavLink> */}
                                    </li>
                                    <li>
                                        {/* <NavLink to="/search/diagrama/p1/obj3"> */}
                                            Definir los efectos ambientales de la HHverde, HHazul, HHgris
                                        {/* </NavLink> */}
                                    </li>
                                </ul>
                                <center>
                                    <div id="output" />
                                    <br />
                                    <hr />
                                    {
                                        this.state.show === "E" ? <img width="700px" height="480px" src={Eimage} alt=""/> : true
                                    }
                                    {
                                        this.state.show === "F" ? <img width="700px" height="480px" src={Fimage} alt=""/> : true
                                    }
                                    {
                                        this.state.show === "G" ? <img width="700px" height="480px" src={Gimage} alt=""/> : true
                                    }
                                    {/* <div id="output2" /> */}
                                </center>
                            </div>

                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <h5 style={{ "cursor": "pointer" }}>Resultados</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <NavLink to="/search/diagrama/p1/">Explorar</NavLink>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <h5 style={{ "cursor": "pointer" }}>Conclusiones</h5>
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
