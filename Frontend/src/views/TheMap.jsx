import React from "react";

import {
    Modal, ModalHeader, ModalBody
} from "reactstrap";


import { Map, Popup, TileLayer, LayersControl, FeatureGroup, Polygon } from 'react-leaflet';
import PropiedadPorFinca from "components/PropiedadPorFinca";

import axios from "axios";
import ReactLoading from "react-loading";

import api from "api_route.js";

class TheMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: [3.2175377205303732, -76.53764390954167],
            fincas: [],
            departamentos: [],
            municipios: [],
            modal: false,
            loading: false,
            ubication: "",
            ubi_type: "",
            results: [],
            counts_tipos: {}
        }
    }

    async componentDidMount() {
        const res = await fetch(api.route + "/map");
        const { fincas, departamentos, municipios } = await res.json();
        this.setState({ fincas: fincas, departamentos: departamentos, municipios: municipios });
    }

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

    buscarUbication = (ubi_type, ubication) => {
        this.setState({ loading: true, ubication: ubication, ubi_type: ubi_type });
        this.openToggle();
        axios.post(api.route + "/map/ubication_by_filter", {
            filters: {
                categoria: "Select",
                subcategoria: "Select",
                tipo: "Select",
                formato: "Select",
            },
            ubication: ubication,
            ubi_type: ubi_type
        })
            .then(res => {
                this.setState({
                    results: res.data.result,
                    counts_tipos: res.data.counts,
                    loading: false,
                    ubi_type: this.state.ubi_type
                });
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
                                <ReactLoading type={"bars"} color={"#51BCDA"} />
                            </center>
                        ) : (
                                this.state.results.length > 0 ?
                                    <PropiedadPorFinca ubication={this.state.ubication}
                                        results={this.state.results}
                                        counts_tipos={this.state.counts_tipos}
                                        ubi_type={this.state.ubi_type} />
                                    : true
                            )
                    }
                </ModalBody>
            </Modal>
        </div>

        return (
            <div>
                {modal}
                <Map className="amapa" center={this.state.position} zoom={9} >
                    <LayersControl position="topright">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            this.state.departamentos.map((e, i) => (
                                <LayersControl.Overlay name={e.departamento} checked="true" key={i}>
                                    <FeatureGroup color="red">
                                        <Popup>
                                            <center>
                                                <h5>{e.departamento}</h5>
                                                <button onClick={() => this.buscarUbication("departamento", e.departamento)} className="btn_search_map">
                                                    Buscar
                                                </button>
                                            </center>
                                        </Popup>
                                        <Polygon positions={e.st_asgeojson} />
                                    </FeatureGroup>
                                </LayersControl.Overlay>
                            ))
                        }
                        {
                            this.state.municipios.map((e, i) => (
                                <LayersControl.Overlay name={e.municipio} checked="true" key={i}>
                                    <FeatureGroup color="yellow">
                                        <Popup>
                                            <center>
                                                <h5>{e.municipio}</h5>
                                                <button onClick={() => this.buscarUbication("municipio", e.municipio)} className="btn_search_map2">
                                                    Buscar
                                                </button>
                                            </center>
                                        </Popup>
                                        <Polygon positions={e.st_asgeojson} />
                                    </FeatureGroup>
                                </LayersControl.Overlay>
                            ))
                        }
                        {
                            this.state.fincas.map((e, i) => (
                                <LayersControl.Overlay name={e.finca} checked="true" key={i}>
                                    <FeatureGroup color="blue">
                                        <Popup>
                                            <center>
                                                <h5>{e.finca}</h5>
                                                <button onClick={() => this.buscarUbication("finca", e.finca)} className="btn_search_map3">
                                                    Buscar
                                                </button>
                                            </center>
                                        </Popup>
                                        <Polygon positions={e.st_asgeojson} />
                                    </FeatureGroup>
                                </LayersControl.Overlay>
                            ))
                        }
                    </LayersControl>
                </Map>
            </div >
        )
    }
}

export default TheMap;