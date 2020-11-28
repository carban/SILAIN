import React from "react";

// import {
//     Row, Col,
//     Button
// } from 'reactstrap';// used for making the prop types of this component

import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// import diagrams from "./diagrams.js";

// import mermaid from 'mermaid';
import metodo from "./metodo.png";
import R1 from "./R1.png";
import R12 from "./R1.2.png";
import R2 from "./R2.png";
import R22 from "./R2.2.png";
import R23 from "./R2.3.png";
import R3 from "./R3.png";

class Project2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: "",
        }
    }

    diagramEvent(e) {
        this.setState({ obj: e });
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
                                <img src={metodo} alt="" />
                                <div style={{ "textAlign": "left" }}>
                                    <h6>Datos Relacionados:</h6>
                                    <ul>
                                        <li>
                                            <Link to="/article/407" style={{ "color": "green" }}>
                                                Caudales promedio diarios en cultivos de arroz, finca San José                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/article/418" style={{ "color": "green" }}>
                                                Datos espectrales por planta en Lote 8, finca San José
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/article/419" style={{ "color": "green" }}>
                                                Datos climáticos finca arrocera San José lote 8
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/article/420" style={{ "color": "green" }}>
                                                Información fisiológica de plantas de arroz en finca San José, lote 8
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
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
                                        <button className="ButtonLikeLink" onClick={this.diagramEvent.bind(this, "R1")}>
                                            Sanidad Física
                                        </button>
                                    </li>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={this.diagramEvent.bind(this, "R2")}>
                                            Sanidad Espectral
                                        </button>
                                    </li>
                                    <li>
                                        <button className="ButtonLikeLink" onClick={this.diagramEvent.bind(this, "R3")}>
                                            Análisis CWP
                                        </button>
                                    </li>
                                </ul>
                                {
                                    (this.state.obj === "R1") ? (
                                        <div>
                                            <p>
                                                La altura promedio final para las plantas de arroz presentes en la parcela Testigo fue de 101,9 cm con una desviación del 6,4% y una altura final para las plantas en la parcela Réplica de 103 cm con una desviación del 6,6%. En el caso de este estudio las plantas de las parcelas Testigo y Réplica en su característica de altura presentan valores acordes a una planta de arroz sana, a pesar de estar en láminas de agua diferentes.
                                            </p>
                                            <center><img src={R1} alt="" width="400px" height="160px" /></center>
                                            <br />
                                            <p>
                                                Se realizaron tres modelos de regresión con los datos de altura de la planta como variable dependiente y los días del cultivo como variable independiente y se encontró que el patrón de crecimiento presente, tanto para la parcela Testigo como para la parcela Réplica, estos se ajustan de mejor manera con el modelo de regresión polinómica, donde el coeficiente de determinación (R2) es del 0,99 en ambos casos, mostrando un crecimiento acorde con las plantas de semillas que actualmente son utilizadas en el cultivo, su crecimiento presenta un comportamiento sigmoidal.
                                            </p>
                                            <center><img src={R12} alt="" width="600px" height="400px" /></center>
                                            <br />
                                        </div>

                                    ) : true
                                }
                                {
                                    (this.state.obj === "R2") ? (
                                        <div>
                                            <p>
                                                Para determinar el efecto del grosor de la lámina de agua en las respuestas espectrales de las plantas se aplicó un ajuste de modelos de regresión entre las bandas espectrales y el nivel de lámina de agua, encontrando que el ajuste con mayor coeficiente de R2 fue 0.32 en la banda infrarroja.
                                                </p>
                                            <br />
                                            <center><img src={R2} alt="" width="400px" height="200px" /></center>
                                            <br />
                                            <p>
                                                Con el valor de las bandas espectrales en las fases estudio en ambas parcelas, se procedió a calcular el promedio de cada uno de los índices en cada fase para las dos parcelas con sus respectivas desviaciones. Para el caso del NDVI fue el índice que tuvo los valores de desviación más bajos, y para este índice los valores de referencia de un arroz sano están alrededor de 0,63 y 0,99 (García, 2010 y Saavedra et al., 2018). En el caso de los índices GNDVI y NDRE presentaron desviaciones ligeramente más grandes que el NDVI, pero igualmente son representativas para las plantas en ambas parcelas, donde para el índice GNDVI las plantas sanas suelen rondar valores de 0,6 (Candiago et al., 2015) y para el índice NDRE valores de 0,5, evidenciando un aspecto positivo en los valores nutricionales de la planta (Zhang et al., 2019).
                                                </p>
                                            <br />
                                            <center><img src={R22} alt="" width="450px" height="380px" /></center>
                                            <br />
                                            <p>
                                                Usando firmas espectrales de plantas de arroz sanas presentadas por autores de investigaciones relacionadas, se calculó la correlación de las firmas espectrales de referencia y las firmas espectrales observadas, se obtuvo que el comportamiento de las firmas para las parcelas experimentales las fases de muestreo es compatible en mayor medida con la firma espectral correspondiente a una planta de arroz sana con correlaciones cercanas a 0,98.
                                                </p>
                                            <br />
                                            <center><img src={R23} alt="" width="400px" height="160px" /></center>
                                            <br />
                                            <p>
                                                Teniendo en cuenta los resultados de correlación anterior, se observa que tanto las correlaciones de las firmas de referencia para las plantas de arroz sanas como las firmas de referencia para las plantas de arroz enferma y ligeramente sana, obtuvieron valores altos.
                                                </p>
                                        </div>
                                    ) : true
                                }
                                {
                                    (this.state.obj === "R3") ? (
                                        <div>
                                            <p>
                                                Se calculó el índice CWP para medir la eficiencia del uso del recurso hídrico en la productividad del cultivo. Para esto se usaron los valores de rendimiento para la parcela Testigo que fue de 59,09 kg con un volumen de agua azul de 187,85 m3 y un volumen de agua verde 43,67 m3 para un uso total de 231,54 m3, para la parcela Réplica el rendimiento fue de 39,53 kg con un volumen de agua azul de 160,25 m3 y un volumen de agua verde 28,03 m3 para un uso total de 188,28 m3.
                                                El índice CWP para la parcela Testigo fue de 0,255, siendo este bajo para los valores estándar de los cultivos de arroz (Gonzáles y Alonso, 2016), pero el rendimiento presenta un indicador de 5,5 Ton/Ha que es un valor aceptable para los cultivos de arroz según los valores estudiados por Gonzáles y Alonso (2016), mostrando así que el problema que presenta el índice CWP tiene mayor peso en el uso ineficiente del recurso hídrico más que en el rendimiento que la parcela presentó.
                                                Para la parcela Réplica el índice CWP fue similar a la otra parcela, pues presentó un valor de 0,21, que como fue explicado anteriormente es bajo, pero de igual forma su rendimiento tiene un indicador de 5,7 Ton/Ha que es admisible según lo estudiado por Gonzáles y Alonso (2016), y contrastando con el resultado anterior, se evidencia el problema sobre el uso del recurso hídrico excesivo y que este no está influyendo de manera óptima para el mejoramiento de la productividad del cultivo.
                                            </p>
                                            <br />
                                            <center><img src={R3} alt="" width="400px" height="160px" /></center>
                                        </div>
                                    ) : true
                                }
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