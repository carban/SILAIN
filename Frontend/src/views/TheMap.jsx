import React from "react";
// import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
// import Footer from "components/Footer.jsx";

// import { Redirect } from "react-router-dom";

import {
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    Container,
    Button,
    Col, Row, Modal, ModalHeader, ModalBody
} from "reactstrap";

// import logo from "logo.png";

import { Map, Popup, TileLayer, LayersControl, FeatureGroup, Polygon } from 'react-leaflet';
// import L from 'leaflet';

class TheMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: [3.2175377205303732, -76.53764390954167],
            fincas: [],
            modal: false
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

    render() {

        const modal = <div>
            <Modal md="10" isOpen={this.state.modal} toggle={this.closeToggle} className="danger">
                <ModalHeader toggle={this.closeToggle}>
                    Insert Data
                </ModalHeader>
                <ModalBody>

                </ModalBody>
            </Modal>
        </div>

        return (
            <div>
                <Map className="amapa" center={this.state.position} zoom={15}>
                    {modal}
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
                                                <Button onClick={() => { this.setState({ modal: true }) }} color="success" block>
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