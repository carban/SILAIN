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
import O2 from "./O2.png";


class Project1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: "",
            showObj: "",
        }
    }

    diagramEvent = e => {
        this.setState({ showObj: e });
    }

    showDiagram = d => {

        this.setState({ "obj": d });

        var output = document.getElementById('output');

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
            case "1":
                graphDefinition = `
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
                break;
            case "2":
                graphDefinition = `
                graph TD
                TO2["Cuantificacion de la HHverde, HHazul, HHgris"];
                TO2-->ST1O2["Cuantificacion de la HHverde y HHazul"];
                TO2-->ST2O2["Cuantificacion de la HHgris"];
                ST1O2-->SS1O2["Metodo CROPWAT</br><b><i>Click para mas detalles</i></b>"];
                ST2O2-->SS2O2["<ul><li>Programa de riego</li><li>Parametros fisicoquimicos</li></ul></br><b><i>Click para mas detalles</i></b>"];

                click SS1O2 foo
                click SS2O2 foo
                `;
                break;

            case "3":
                graphDefinition = `
                graph TD
                TO3["Definir los efectos ambientales de la HHverde, HHazul, HHgris"];
                TO3-->ST1O3["Sustentabilidad hidrica de la HHverde"];
                TO3-->ST2O3["Sustentabilidad hidrica de la HHazul"];
                TO3-->ST3O3["Sustentabilidad hidrica de la HHgris"];
                ST1O3-->SS1O3["Calculo del inidice de presion </br> a los ecosistemas (IPHE) a traves de: </br><b><i>Click para mas detalles</i></b>"];
                ST2O3-->SS2O3["<ul><li>Calculo del indice de agua</br>no retomada a la cuenca</li><li>Parametros fisicoquimicos</li></ul></br><b><i>Click para mas detalles</i></b>"];
                ST3O3-->SS303["<ul><li>Calculo del indices de calidad</br>de agua ICA ......</li><li>Parametros fisicoquimicos</li></ul></br><b><i>Click para mas detalles</i></b>"]

                click SS1O3 foo
                click SS2O3 foo
                click SS303 foo
                `;
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
                                        <button className="ButtonLikeLink" onClick={() => { this.showDiagram("1") }}>
                                            Caracterizacion del manejo y uso del agua en la unidad agricola
                                        </button>
                                    </li>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={() => { this.showDiagram("2") }}>
                                            Cuantificacion de la HHverde, HHazul, HHgris
                                        </button>
                                    </li>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={() => { this.showDiagram("3") }}>
                                            Definir los efectos ambientales de la HHverde, HHazul, HHgris
                                        </button>
                                    </li>
                                </ul>
                                <center>
                                    < div id="output" />
                                    {
                                        this.state.obj === "1" ?
                                            <div>
                                                < div id="output" />
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
                                            </div>
                                            : true
                                    }
                                    {
                                        this.state.obj === "2" ?
                                            <div>
                                                < div id="output" />
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
                                        this.state.obj === "3" ?
                                            <div>
                                                < div id="output" />
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
