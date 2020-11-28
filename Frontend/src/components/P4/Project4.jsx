import React from "react";

import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import arch from "./p4_arch.png";

class Project4 extends React.Component {

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
                        INTEGRACIÓN MULTIESCALA ENTRE MODELOS CLIMÁTICOS GLOBALES Y REGIONALES MEDIANTE TÉCNICAS DE INTELIGENCIA ARTIFICIAL
                    </h5>
                    <b>
                        Trabajo de Grado presentado como requisito para optar por el título de Magister en Ingeniería de Sistemas
                    </b>
                </center>
                <b>Realizado por:</b> <br />
                Wilmer Muñoz Herrera <br />
                <b>Director:</b> <br />
                    MAURICIO EDILBERTO RINCÓN ROMERO <br />
                    Ingeniero Catastral y Geodesta M.Sc. Ph.D. <br />
                <b>Codirector:</b> <br />
                Oscar Fernando Bedoya, PhD.<br />
                <hr />
                <br />
                <Accordion>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{ "backgroundColor": "#65A357" }}>
                            <h5 style={{ "cursor": "pointer", "textAlign": "center" }}><b>Resumen</b></h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div className="projectBody" style={{ "textAlign": "justify" }}>
                                El cambio climático es un problema que afecta gran parte de las actividades humanas, en
                                especial la agricultura. En esta investigación se realizó la exploración del comportamiento
                                climático en la región del Valle del Cauca para futuros escenarios, con el uso de Modelos
                                Climáticos Globales (GCM) que pronostican diferentes variables climáticas alrededor de
                                los futuros 100 años, con resoluciones espaciales de 100 Km x 100 Km
                                aproximadamente. En particular, se integraron las metodologías de modelación climática
                                regional para el mejoramiento de resolución espacial (Downscaling) de los GCM a
                                resoluciones espaciales de 5.6 Km x 5.6 Km aproximadamente, con la ayuda de técnicas
                                de inteligencia artificial para la modelación, información de datos satelitales y estaciones
                                locales que permite generar información con resolución espacial útil para la toma de
                                decisiones frente a las futuras condiciones climáticas que se pueden presentar, en
                                especial las variables climáticas de precipitación y temperatura. Como técnicas de
                                inteligencia artificial se exploraron, redes neuronales, máquinas de soporte vectorial,
                                Random Forest y Redes Bayesianas, identificando que, para la región del Valle del Cauca
                                con sus condiciones ambientales, las técnicas de Random Forest, máquinas de soporte
                                vectorial con kernel radial y redes neuronales multicapa con el algoritmo backpropagation
                                y función de activación sigmoid de dos y una capa oculta presentan mejores resultados de
                                predicción.

                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="1" style={{ "backgroundColor": "#98B503" }}>
                            <h5 style={{ "cursor": "pointer", "textAlign": "center" }}><b>Metodología</b></h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div className="projectBody">
                                <b> ZONA DE ESTUDIO </b>
                                <br />
                                <br />
                                La zona de estudio se encuentra ubicada en la región pacífica y andina de Colombia, el
                                cual corresponde al departamento del Valle del Cauca, limitando con los departamentos
                                de Chocó, Risaralda, Quindío, Tolima, Cauca y el océano pacífico. La precipitación

                                promedio anual en la parte media del Valle del Río Cauca, desde Puerto Tejada hasta
                                Cartago no supera los 1500 mm/año, con excepción de Cali, Yumbo, Cerrito y Candelaria
                                donde oscila alrededor de 1000 mm/año, en la parte alta de la vertientes la precipitación
                                tiene valores cercanos a los 2000 mm/año, en la parte baja oscila los 4000 mm/año en las
                                estribaciones de las cordilleras, 1500 mm/año en la desembocadura del río Cauca y en la
                                parte pacífica puede alcanzar los 6000 mm/año.

                                <br />
                                <br />

                                <b>ARQUITECTURA</b>

                                <br />
                                <br />
                                <center><img src={arch} alt="arch" width="50%" height="50%" /> </center>


                                <br />
                                <br />

                                <div style={{ "textAlign": "left" }}>
                                    <h6>Datos Relacionados:</h6>
                                    <ul>
                                        <li>
                                            <Link to="/article/407" style={{ "color": "green" }}>
                                                Caudales promedio diarios en cultivos de arroz, finca San José                                            </Link>
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
                                <b>PROTOTIPO WEB</b>
                                <br />
                                <br />
                                Los resultados obtenidos del proceso de downscaling de las variables de precipitación y
                                temperatura con resolución espacial de 5.6 Km2, mediante el uso de la técnica de
                                Random Forest están almacenados en el motor de base de datos PostgreSQL. El acceso
                                y consulta de esta información se realiza a través del lenguaje de programación PHP. El
                                prototipo web puede ser consultado a través del enlace <a href="http://45.5.164.43/downscaling_vc/">http://45.5.164.43/downscaling_vc/</a>.
                                <br />
                                <br />
                                <b>API</b>
                                <br />
                                <br />
                                Este sistema web tiene la posibilidad de prestar los servicios de la modelación de las
                                variables de precipitación y temperatura en los cuatro posibles escenarios para la región

                                del Valle del Cauca, mediante el API. El cual se encuentra documentada en la página web
                                <a href="http://45.5.164.43/downscaling_vc/#api">http://45.5.164.43/downscaling_vc/#api/</a> del sistema, todos los procedimientos,
                                estructura de consulta y respuesta de los datos de modelación a través del método de
                                aprendizaje de Random Forest.
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div>
                        <Accordion.Toggle as={Card.Header} eventKey="3" style={{ "backgroundColor": "#E7B107" }}>
                            <h5 style={{ "cursor": "pointer", "textAlign": "center" }}><b>Conclusiones</b></h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <div className="projectBody">
                                Los resultados obtenidos en esta investigación alcanzaron los objetivos propuestos y los
                                resultados esperados, de esta manera se presenta en los siguientes ítems las
                                conclusiones por cada uno de los objetivos propuestos.
                                <br />
                                <br />
                                La información satelital de temperatura de MODIS y datos globales de precipitación
                                CHIRPS permiten reconstruir información espacial y series de tiempo no existentes por
                                parte de las estaciones meteorológicas locales. En esta investigación se utilizaron redes
                                neuronales como método para la elaboración de esta información, obteniendo niveles de
                                correlación aceptables de alrededor de 0.75 para la precipitación y 0.87 para la
                                temperatura. Siendo esta información indispensable para realizar proyecciones climáticas
                                que abarquen toda la distribución espacial de la región de estudio.
                                Los valores bajos de exactitud obtenidos para las variables de precipitación y temperatura
                                en la región del pacífico del Valle del Cauca se pueden presentar debido a la falta o
                                insuficiente de información meteorológica de las estaciones locales. Por ejemplo, en la
                                precipitación la diferencia entre los valores reales y estimados están alrededor de los 100
                                mm/mes y 150 mm/mes en la zona pacífica y alrededor de 20 mm/mes y 40 mm/mes en
                                las otras regiones, de igual manera la temperatura alrededor de los 2 °C y 3 °C de
                                diferencia en las zonas del pacífico y montañosa de la región, mientras que en las otras
                                regiones son menores a 1 °C.
                                <br />
                                <br />
                                La presencia de múltiples modelos climáticos globales por diferentes instituciones,
                                versiones y posibles escenarios hace que la investigación en estos temas en particular
                                sea muy amplia. De esta manera se considera el uso del modelo climático global para
                                esta investigación sea el modelo HadGEM2-ES del proyecto CMIP5, el cual ha obtenido
                                mejores rendimientos en las regiones tropicales y suramericanas en comparación con
                                otros modelos, por esta razón la región del Valle del Cauca no es ajena a los estudios que
                                evaluaron el modelo HadGEM2-ES.
                                <br />
                                <br />
                                Entre las técnicas de inteligencia artificial utilizadas, Random Forest permite estimar de
                                forma más acertada la precipitación y temperatura. En particular, esta técnica alcanza un
                                nivel de correlación de 0.81 para la precipitación y 0.93 para la temperatura, en
                                comparación con las otras técnicas. No obstante, las técnicas de máquinas de soporte
                                vectorial con kernel radial y redes neuronales con dos capas ocultas de cinco y dos
                                neuronas pueden presentar resultados aceptables, con alrededor de 0.75 en precipitación
                                y 0.90 en temperatura. Mientras que, los kernel lineales, polinomial y sigmoide de
                                máquinas de soporte vectorial y las redes bayesianas presentan un bajo nivel de
                                correlación.
                                <br />
                                <br />
                                El prototipo web está disponible al público para el uso de cualquier usuario que desea
                                conocer cómo será el comportamiento de las variables climáticas de precipitación y
                                temperatura en el futuro. Para aspectos de mitigación, evaluación de impactos
                                ambientales, agricultura, entre otros ámbitos. Además, el uso de estos resultados para
                                otras aplicaciones o análisis específicos mediante la disponibilidad de API. Como también,
                                <br />
                                <br />
                                el uso de esta herramienta puede realizarse a través de plataformas móviles, sin
                                embargo, para obtener una buena experiencia en el uso es recomendable realizarlo a
                                través de computador de escritorio o Tablet.

                            </div>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
            </div>
        )
    }
}

export default Project4;