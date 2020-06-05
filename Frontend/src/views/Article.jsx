import React from "react";

// reactstrap components
import {
    Col, Container, Row, Button
} from 'reactstrap';

// import axios from "axios";
import SNavBar from "components/SNavBar.jsx";
import api from "api_route.js";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }
    }

    async componentDidMount() {
        const res = await fetch(api.route + "/article/" + this.props.match.params.id);
        const { info } = await res.json();
        this.setState({ info: info });
    }

    render() {
        return (
            <div>
                <SNavBar />
                <Container>
                    <h3>{this.state.info.titulo}</h3>
                    <hr />
                    <Row>
                        <Col md="7" lg="7">
                            <Row>
                                <b>Resumen: </b>
                            </Row>
                            <Row>
                                {this.state.info.resumen}
                            </Row>
                            <Row>
                                <b>Descripcion: </b>
                            </Row>
                            <Row>
                                {this.state.info.descripcion}
                            </Row>

                        </Col>
                        <Col md="5" lg="5">
                            <Row>
                                <Col lg="1">
                                    <b>
                                        <i className="nc-icon nc-pin-3" style={{ "fontSize": "25px" }}></i>
                                    </b>
                                </Col>
                                <Col lg="5">
                                    <b>Municipio: </b>
                                    {this.state.info.municipio}
                                    {/* &nbsp;&nbsp; */}
                                    <br />
                                    <b>Finca: </b>
                                    {this.state.info.finca}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <br />
                    <br />

                    <center>
                        <Row lg="12" md="12" >
                            <Col lg="6" md="6">

                                <h5>Caracteristicas</h5>
                                <div >
                                    <ul style={{ "textAlign": "left" }}>
                                        <li><b>Categoria: </b>{this.state.info.categoria}</li>
                                        <li><b>Subcategoria: </b>{this.state.info.subcategoria}</li>
                                        <li><b>Fecha de creacion: </b>{this.state.info.creado}</li>
                                        <li><b>Fecha de disponibilidad: </b>{this.state.info.disponibilidad}</li>
                                        <li><b>Derechos: </b>{this.state.info.derechos}</li>
                                        <li><b>Publicador: </b>{this.state.info.publicador}</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="6" md="6">
                                <h5>Datos de descarga</h5>
                                <div>
                                    <ul style={{ "textAlign": "left" }}>
                                        <li><b>Tipo: </b>{this.state.info.tipo}</li>
                                        <li><b>Formato: </b>{this.state.info.formato}</li>
                                        <li><b>Tamano: </b>{this.state.info.tamano}</li>
                                        <Button color="info">Descargar</Button>
                                    </ul>
                                    {/* <a href={this.state.info.url}>DESCARGA</a> */}
                                </div>
                            </Col>
                        </Row>
                    </center>

                </Container >
            </div >
        )
    }
};

export default Article;