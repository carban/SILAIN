import React from "react";

import {
    Button,
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
            modal: false,
            finca: "",
            results: [],
            counts_tipos: {}
        }
    }

    async componentDidMount() {
        const res = await fetch("http://localhost:8000/map");
        const { fincas } = await res.json();
        this.setState({ fincas: fincas });
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

    buscarFinca = finca => {
        axios.post("http://localhost:8000/map/finca_by_filter", { filters: {}, finca: finca })
            .then(res => {
                this.setState({ finca: finca, results: res.data.result, counts_tipos: res.data.counts });
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
                    {this.state.finca}
                </ModalHeader>
                <ModalBody>
                    {this.state.results.length > 0 ?
                        <PropiedadPorFinca finca={this.state.finca}
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
                        <LayersControl.BaseLayer name="MapInk" checked="true">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </LayersControl.BaseLayer>
                        {
                            this.state.fincas.map((e, i) => (
                                <LayersControl.Overlay name={e.finca} checked="true" key={i}>
                                    <FeatureGroup color="lime">
                                        <Popup>
                                            <center>
                                                <h5>{e.finca}</h5>
                                                <Button onClick={() => this.buscarFinca(e.finca)} color="success" block>
                                                    Buscar
                                                </Button>
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