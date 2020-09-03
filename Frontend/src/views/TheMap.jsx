import React from "react";

import {
    Modal, ModalHeader, ModalBody
} from "reactstrap";

import { Map, Popup, TileLayer, LayersControl, FeatureGroup, Polygon } from 'react-leaflet';
import PropiedadByMap from "components/Map/PropiedadByMap";
import FiltersOnMap from "components/Map/FiltersOnMap";

import axios from "axios";
import ReactLoading from "react-loading";
import Control from 'react-leaflet-control';

import api from "api_route.js";

class TheMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: [3.2175377205303732, -76.53764390954167],
            zoom: 7,

            finca: [],
            departamento: [],
            municipio: [],
            modal: false,
            loading: false,
            ubication: "",
            ubi_type: "",
            results: [],
            counts_tipos: {},

            totalResults: 0,
            pages: [],
            currentPage: 0,

            selections: {
                departamento: "Select",
                municipio: "Select",
                finca: "Select",
            }
        }
    }

    // async componentDidMount() {
    //     const res = await fetch(api.route + "/map");
    //     const { fincas, departamentos, municipios } = await res.json();
    //     this.setState({ fincas: fincas, departamentos: departamentos, municipios: municipios });
    // }

    openToggle = () => {
        this.setState({
            modal: true
        });
    }

    closeToggle = () => {
        this.setState({
            modal: false,
            results: [],
            counts_tipos: {}
        });
    }

    buscarUbication(ubi_type, ubication) {
        // console.log(ubication);
        this.setState({ loading: true, ubication: ubication, ubi_type: ubi_type, currentPage: 0 });
        this.openToggle();
        axios.post(api.route + "/map/ubication_by_filter", {
            filters: {
                cultivo: "Select",
                categoria: "Select",
                subcategoria: "Select",
                tipo: "Select",
                formato: "Select",
            },
            ubication: ubication,
            ubi_type: ubi_type,
            currentPage: 0
        })
            .then(res => {
                this.setState({
                    results: res.data.result,
                    totalResults: res.data.totalResults,
                    pages: res.data.pages,
                    counts_tipos: res.data.counts,
                    loading: false,
                    ubi_type: this.state.ubi_type,
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    changePage(page) {

        this.setState({ loading: true })
        axios.post(api.route + "/map/ubication_by_filter", {
            filters: {
                cultivo: "Select",
                categoria: "Select",
                subcategoria: "Select",
                tipo: "Select",
                formato: "Select",
            },
            ubication: this.state.ubication,
            ubi_type: this.state.ubi_type,
            currentPage: page
        })
            .then(res => {
                this.setState({
                    results: res.data.result,
                    totalResults: res.data.totalResults,
                    pages: res.data.pages,
                    counts_tipos: res.data.counts,
                    loading: false,
                    ubi_type: this.state.ubi_type,
                    currentPage: page
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    getFilters(obj) {
        // console.log(obj);
        const basicURL = api.route + "/map/getpoly";
        // console.log(obj)
        axios.post(basicURL, { filters: obj })
            .then(res => {
                var { departamento, municipio, finca } = res.data;
                // console.log(departamento);
                this.setState({
                    departamento: departamento,
                    municipio: municipio,
                    finca: finca
                });

                if (departamento.length === 0) {
                    this.setState({ position: [3.2175377205303732, -76.53764390954167], zoom: 7 });
                } else if (municipio.length === 0) {
                    this.setState({ position: departamento[0].centroid, zoom: 8 });
                } else if (finca.length === 0) {
                    this.setState({ position: municipio[0].centroid, zoom: 10 });
                } else {
                    this.setState({ position: finca[0].centroid, zoom: 16 });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        const modal = <div>
            <Modal lg="12" size="modal-dialog modal-lg" className="modal-lg" isOpen={this.state.modal} toggle={this.closeToggle}
                fade={false}>
                <ModalHeader toggle={this.closeToggle}>
                    {this.state.ubication}
                </ModalHeader>
                <ModalBody>
                    {
                        this.state.loading ? (
                            <center>
                                <ReactLoading type={"bars"} color={"#A5C80A"} />
                            </center>
                        ) : (
                                this.state.results.length > 0 ?
                                    <PropiedadByMap ubication={this.state.ubication}
                                        results={this.state.results}
                                        counts_tipos={this.state.counts_tipos}
                                        ubi_type={this.state.ubi_type}
                                        totalResults={this.state.totalResults}
                                        pages={this.state.pages} 
                                        currentPage={this.state.currentPage}
                                        changePage={this.changePage.bind(this)}
                                        />
                                    : true
                            )
                    }
                </ModalBody>
            </Modal>
        </div>

        return (
            <div>
                <center>
                    {modal}
                    <Map className="amapa" center={this.state.position} zoom={this.state.zoom}>
                        <LayersControl position="topright">
                            <LayersControl.BaseLayer name="Normal" checked="true">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Blanco y Negro">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                                />
                            </LayersControl.BaseLayer>

                            <LayersControl.BaseLayer name="Transporte">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png"
                                />
                            </LayersControl.BaseLayer>
                            {/* End Layers */}
                            <Control position="topright">
                                <div className="info legend">
                                    <i style={{ "backgroundColor": "purple" }} ></i>
                                    Departamentos
                                    <br />
                                    <i style={{ "backgroundColor": "cyan" }} ></i>
                                    Municipios
                                    <br />
                                    <i style={{ "backgroundColor": "blue" }} ></i>
                                    Fincas
                                </div>
                            </Control>
                            <Control position="topright">
                                <FiltersOnMap getFilters={this.getFilters.bind(this)} />
                            </Control>
                        </LayersControl>
                        {
                            this.state.departamento.length === 1 ? (
                                <FeatureGroup color="purple">
                                    <Popup>
                                        <center>
                                            <h5>{this.state.departamento[0].departamento}</h5>
                                            <button onClick={this.buscarUbication.bind(this, "departamento", this.state.departamento[0].departamento)} className="btn_search_map">
                                                Buscar
                                                </button>
                                        </center>
                                    </Popup>
                                    <Polygon positions={this.state.departamento[0].poly} />
                                </FeatureGroup>
                            ) : true
                        }
                        {
                            this.state.municipio.length === 1 ? (
                                <FeatureGroup color="cyan">
                                    <Popup>
                                        <center>
                                            <h5>{this.state.municipio[0].municipio}</h5>
                                            <button onClick={this.buscarUbication.bind(this, "municipio", this.state.municipio[0].municipio)} className="btn_search_map2">
                                                Buscar
                                                </button>
                                        </center>
                                    </Popup>
                                    <Polygon positions={this.state.municipio[0].poly} />
                                </FeatureGroup>
                            ) : true
                        }
                        {
                            this.state.finca.length === 1 ? (
                                <FeatureGroup color="blue">
                                    <Popup>
                                        <center>
                                            <h5>{this.state.finca[0].finca}</h5>
                                            <button onClick={this.buscarUbication.bind(this, "finca", this.state.finca[0].finca)} className="btn_search_map3">
                                                Buscar
                                                </button>
                                        </center>
                                    </Popup>
                                    <Polygon positions={this.state.finca[0].poly} />
                                </FeatureGroup>
                            ) : true
                        }
                    </Map>
                </center>
            </div >
        )
    }
}

export default TheMap;