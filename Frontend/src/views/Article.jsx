import React from "react";

// reactstrap components
import {
    Col, Container, Row, Button
} from 'reactstrap';

import { Map, TileLayer, LayersControl, FeatureGroup, Polygon, Tooltip } from 'react-leaflet';
import axios from "axios";
import ReactLoading from "react-loading";
import download from "downloadjs";
import { Redirect } from "react-router-dom";


import SNavBar from "components/SNavBar.jsx";
import api from "api_route.js";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            loading: true,
            finca: [],
            centroid: [],
            redirect: false,
            redirect_word: ""
        }
    }

    async getFile() {
        // Conseguir el nombre del archivo
        const res = await fetch(api.route + "/article/download/filename/" + this.props.match.params.id);
        const { filename } = await res.json();

        // Conseguir el archivo a descargar
        axios.get(api.route + "/article/download/" + this.props.match.params.id, {
            responseType: "blob"
        }).then(res => {
            let blob = new Blob([res.data])
            download(blob, filename);
        }).catch(err => {
            console.log(err);
            alert("No se encontro el recurso");
        });
    }

    async componentDidMount() {
        const res = await fetch(api.route + "/article/" + this.props.match.params.id);
        const { info, finca } = await res.json();
        this.setState({ info: info, loading: false, finca: finca, centroid: finca[0].centroid });
    }

    redirectPclave(w) {
        this.setState({ redirect: true, redirect_word: w });
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/search/clave",
                words: this.state.redirect_word,
            }} />;
        }
    }

    render() {
        return (
            <div>
                <SNavBar />
                {
                    this.state.loading ? (
                        <center>
                            <ReactLoading type={"bars"} color={"#A5C80A"} />
                        </center>
                    ) :
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
                                        <Button onClick={this.getFile.bind(this)} color="success">Descargar</Button>
                                    </ul>
                                    <ul style={{ "textAlign": "left" }}>
                                        <h5>Palabras clave</h5>
                                        {
                                            this.state.info.pclave.split(",").map((e, i) => (
                                                <button onClick={this.redirectPclave.bind(this, e)} className="ButtonLikeLink">{e}</button>
                                            ))
                                        }
                                    </ul>
                                    {this.state.redirect ? this.renderRedirect() : true}


                                </Col>

                                <Col md="6" lg="6">
                                    <b>Resumen: </b>
                                    <br />
                                    {this.state.info.resumen}
                                    <br />
                                    <b>Descripcion: </b>
                                    <br />
                                    {this.state.info.descripcion}

                                    <Map className="amapa-minimap leaflet-container-minimap" center={this.state.centroid} zoom={16}>
                                        <TileLayer
                                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        {
                                            this.state.finca.length === 1 ? (
                                                <FeatureGroup color="blue">
                                                    <Tooltip direction="top">
                                                        <center>
                                                            <h5>Finca: {this.state.info.finca}</h5>
                                                            <b>Lat: {this.state.centroid[0]}</b>
                                                            <br />
                                                            <b>Lng: {this.state.centroid[1]}</b>
                                                        </center>
                                                    </Tooltip>
                                                    <Polygon positions={this.state.finca[0].poly} />
                                                </FeatureGroup>
                                            ) : true
                                        }
                                    </Map>
                                </Col>
                            </Row>
                        </Container >

                }
            </div >
        )
    }
};

export default Article;