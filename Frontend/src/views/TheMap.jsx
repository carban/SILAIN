import React from "react";

import {
    Modal, ModalHeader, ModalBody
} from "reactstrap";


import { Map, Popup, TileLayer, LayersControl, FeatureGroup, Polygon } from 'react-leaflet';
import PropiedadPorFinca from "components/PropiedadPorFinca";

import axios from "axios";

class TheMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: [3.2175377205303732, -76.53764390954167],
            fincas: [],
            departamentos: [],
            municipios: [],
            modal: false,
            ubication: "",
            results: [],
            counts_tipos: {}
        }
    }

    async componentDidMount() {
        const res = await fetch("http://localhost:8000/map");
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
            modal: false
        });
    }

    buscarUbication = ubication => {
        axios.post("http://localhost:8000/map/ubication_by_filter", { filters: {}, ubication: ubication })
            .then(res => {
                // console.log({ ubication: ubication, results: res.data.result, counts_tipos: res.data.counts })
                this.setState({ ubication: ubication, results: res.data.result, counts_tipos: res.data.counts });
                this.openToggle();
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        const modal = <div>
            <Modal lg="12" size="modal-dialog modal-lg" className="modal-lg" isOpen={this.state.modal} toggle={this.closeToggle} >
                <ModalHeader toggle={this.closeToggle}>
                    {this.state.ubication}
                </ModalHeader>
                <ModalBody>
                    {this.state.results.length > 0 ?
                        <PropiedadPorFinca ubication={this.state.ubication}
                            results={this.state.results}
                            counts_tipos={this.state.counts_tipos} />
                        : true
                    }
                </ModalBody>
            </Modal>
        </div>

        return (
            <div>
                {modal}
                <Map className="amapa" center={this.state.position} zoom={15}>
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
                                                <button onClick={() => this.buscarUbication(e.departamento)} className="btn_search_map">
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
                                                <button onClick={() => this.buscarUbication(e.municipio)} className="btn_search_map">
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
                                                <button onClick={() => this.buscarUbication(e.finca)} className="btn_search_map">
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