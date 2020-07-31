import React from "react";

// import {
//     Row, Col,
//     Button
// } from 'reactstrap';// used for making the prop types of this component

import { Accordion, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import diagrams from "./diagrams.js";

import mermaid from 'mermaid';


class Project2 extends React.Component {

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

        // this.setState({ "obj": d });

        // var output;

        // if (d[0] === "O") {
        //     output = document.getElementById('output');
        // } else {
        //     output = document.getElementById('outputResults');
        // }

        // var config = {
        //     startOnLoad: true,
        //     flowchart: {
        //         useMaxWidth: true,
        //         htmlLabels: true,
        //         curve: 'cardinal',
        //     },
        //     securityLevel: 'loose',
        // };

        // mermaid.initialize(config);

        // var graphDefinition;

        // switch (d) {
        //     case "O1":
        //         graphDefinition = diagrams.o1;
        //         break;
        //     case "O2":
        //         graphDefinition = diagrams.o2;
        //         break;
        //     case "O3":
        //         graphDefinition = diagrams.o3;
        //         break;
        //     case "R1":
        //         graphDefinition = diagrams.r1;
        //         break;
        //     case "R2":
        //         graphDefinition = diagrams.r2;
        //         break;
        //     case "R3":
        //         graphDefinition = diagrams.r3;
        //         break;
        //     default:
        //         break;
        // }

        // mermaid.render('theGraph', graphDefinition, (svgCode, bindFunctions) => {
        //     output.innerHTML = svgCode;
        //     bindFunctions()
        // });
    }

    componentDidMount() {
        window.foo = e => { this.diagramEvent(e); }
    }

    render() {
        // console.log(this.props.history)
        return (
            <div className="animated bounceIn fast">
                <center>
                    <h5>
                        ANÁLISIS DEL EFECTO DEL GROSOR DE LA LÁMINA DE AGUA EN EL CULTIVO DE ARROZ A PARTIR DEL ANÁLISIS DE RESPUESTAS ESPECTRALES.
                    </h5>
                    <b>
                        Trabajo de Grado presentado como requisito para optar por el título de <br></br>
                        Ingeniero Topográfico
                    </b>
                </center>
                <b>Realizado por:</b> <br />
                    Nelson Jair Centeno Moreno <br />
                <b>Director:</b> <br />
                    MAURICIO EDILBERTO RINCÓN ROMERO <br />
                    Ingeniero Catastral y Geodesta M.Sc. Ph.D. <br />
                <hr />
                <br />
                <Accordion>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{ "backgroundColor": "#65A357" }}>
                            <h5 style={{ "cursor": "pointer", "textAlign": "center" }}><b>Resumen</b></h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div className="projectBody" style={{ "textAlign": "justify" }}>
                                La planta de arroz, al presentar una característica semiacuática le permite crecer en cultivos de inundación, pero manejar el cultivo en estas condiciones con alta concentración afecta negativamente el aspecto físico y económico. El presente trabajo muestra la aplicación de diversos análisis dentro de un marco metodológico para estudiar la relación existente entre las variables físicas y biológicas de las plantas de arroz con la lámina de agua de inundación que presentan las plantas durante el ciclo del cultivo. Se estudiaron cuatro variables de control: Altura, numero de macollos, verdor y respuesta espectral, estas variables que permiten conocer la sanidad y estado fenológico de la planta y fueron medidas durante un ciclo de un cultivo de arroz en dos parcelas experimentales denominadas “Testigo” (con una altura media de lámina de agua de 10 cm) y “Réplica” (con una altura media de lámina de agua de 15 cm), pero de forma detallada, cada planta presentó una lámina de agua independiente, debido a la micro nivelación del terreno, mostrando que las plantas en sus variables físicas como la altura y el número de macollos se encuentran entre los valores estándar independientemente de la lámina de agua, y la relación entre estas variables y la lámina de agua, presentaron R2 menores a 0,1 y 0,4 respectivamente. Utilizando un análisis de componentes principales y matriz de correlación entre las firmas espectrales, se encontró una ligera relación negativa entre la banda infrarroja y los índices de vegetación (Índice de vegetación de diferencia normalizado, NDVI; Índice de vegetación de diferencia normalizada verde, GNDVI y Diferencia normalizada de rojo, NDRE) indicando existe una leve afectación sobre estos indicadores. En contraste con la lámina de agua, esta sí afecta de manera negativa los parámetros biológicos de las plantas a medida que ella aumenta, pero la correlación entre las firmas espectrales de las plantas muestreadas y las firmas espectrales de referencia son cercanas a 0.98, mostrando que todas estas se encuentran sanas. Se logró identificar que existe un uso excesivo del agua de riego del 78% y 83% respectivamente, y que sus índices CWP (Productividad del agua del cultivo) son de 0,25 y 0,21 para Testigo y Réplica. Estos resultados permiten mostrar que existe inefectividad en el uso del recurso hídrico y que el exceso de este no beneficia al cultivo.
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="1" style={{ "backgroundColor": "#98B503" }}>
                            <h5 style={{ "cursor": "pointer", "textAlign": "center" }}><b>Metodología</b></h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div className="projectBody">
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
                                    {

                                    }

                                    {


                                    }
                                    {

                                    }
                                </center>

                            </div>

                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="2" style={{ "backgroundColor": "#EBC038" }}>
                            <h5 style={{ "cursor": "pointer", "textAlign": "center" }}><b>Resultados</b></h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <div className="projectBody">
                                <h6>Resultados Por objetivo</h6>
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
                                    {

                                    }
                                </center>
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="3" style={{ "backgroundColor": "#E7B107" }}>
                            <h5 style={{ "cursor": "pointer", "textAlign": "center" }}><b>Conclusiones</b></h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <div className="projectBody">
                                A partir del estudio realizado, examinando la información obtenida por medio del muestreo de las plantas de arroz de las parcelas experimentales con diferentes láminas de agua, fue posible evidenciar el bajo efecto del grosor de la lámina de agua en las características físicas, biológicas y productivas de las plantas a través del ciclo del cultivo. Esto se puede evidenciar a través de los tratamientos realizados a los datos, pues los modelos de regresión lineal estimados no superan un valor de 0,30 de R2 en ninguno de los análisis para las diferentes combinaciones realizadas.
                                La metodología empleada consideró una muestra de nivel de lámina de agua entre 5 y 20 cm lo cual lo ubica en un experimento de entorno controlado con resultados esperados, sin embargo, resulta necesario considerar escenarios de respuesta crítica para la variable estudiada, como lo son valores de lámina de agua entre saturada (0 cm con suelo humedecido) y mayor a 20 cm, con el fin de detectar casos de estrés hídrico en la planta y su incidencia directa en las características físicas y biológicas.
                                Con respecto al uso eficiente del recurso hídrico en las parcelas experimentales se encontró que existe un desaprovechamiento de más del 80% del agua de riego que se proporciona al cultivo, pues no se toma en cuenta que la precipitación suple gran parte de la necesidad hídrica del cultivo (Santana, 2008) y al realizar el cálculo del índice CWP se observa que los valores obtenidos para ambas parcelas es de 0,2 siendo un valor bajo, pero el rendimiento del cultivo sí se encuentra entre los valores aceptables, dejando así solo el problema sobre el uso excesivo del recurso hídrico.
                                </div>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
            </div>
        )
    }
}

export default Project2;