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
                        <Col md="6" lg="6">
                            <Row>
                                <Col lg="1">
                                    <b>
                                        <i className="nc-icon nc-pin-3" style={{ "fontSize": "25px" }}></i>
                                    </b>
                                </Col>
                                <Col lg="6">
                                    <b>Departamento: </b>
                                    {this.state.info.departamento}
                                    <br />
                                    <b>Municipio: </b>
                                    {this.state.info.municipio}
                                    {/* &nbsp;&nbsp; */}
                                    <br />
                                    <b>Finca: </b>
                                    {this.state.info.finca}
                                </Col>
                            </Row>
                            <br />
                            <ul style={{ "textAlign": "left" }}>
                                <h5>Caracteristicas</h5>
                                <li><b>Categoria: </b>{this.state.info.categoria}</li>
                                <li><b>Subcategoria: </b>{this.state.info.subcategoria}</li>
                                <li><b>Fecha de creacion: </b>{this.state.info.creado}</li>
                                <li><b>Fecha de disponibilidad: </b>{this.state.info.disponibilidad}</li>
                                <li><b>Derechos: </b>{this.state.info.derechos}</li>
                                <li><b>Publicador: </b>{this.state.info.publicador}</li>
                            </ul>
                            <ul style={{ "textAlign": "left" }}>
                                <h5>Datos de descarga</h5>
                                <li><b>Tipo: </b>{this.state.info.tipo}</li>
                                <li><b>Formato: </b>{this.state.info.formato}</li>
                                <li><b>Tamano: </b>{this.state.info.tamano}</li>
                                <Button color="info">Descargar</Button>
                            </ul>
                        </Col>

                        <Col md="6" lg="6">
                            <b>Resumen: </b>
                            <br/>
                            {this.state.info.resumen}
                            <br/>
                            <b>Descripcion: </b>
                            <br/>
                            {this.state.info.descripcion}

                            <div id="minimap"></div>
                        </Col>
                    </Row>
                </Container >
            </div >
        )
    }
};

export default Article;