import React from "react";

// reactstrap components
import {
    Row, Col, Alert, Badge
} from 'reactstrap';

import axios from "axios";
import ReactLoading from "react-loading";

import CustomFiltersByMap from "components/Map/CustomFiltersByMap.jsx";
import ResultsTableByMap from "components/Map/ResultsTableByMap";

import api from "api_route.js";

class PropiedadByMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            counts_tipos: {},
            ubication: "",
            ubi_type: "",
            filters: {
                categoria: "Select",
                subcategoria: "Select",
                tipo: "Select",
                formato: "Select",
            },
            loading: false,
        }
    }

    allSelect = () => {
        for (let i in this.state.filters) {
            if (this.state.filters[i] !== "Select") {
                return false;
            }
        }
        return true;
    }


    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.newBasicSearch();
    }

    getFilters = obj => {
        const basicURL = api.route + "/map/ubication_by_filter";
        this.setState({ loading: true })
        axios.post(basicURL, { filters: obj, ubication: this.state.ubication, ubi_type: this.state.ubi_type })
            .then(res => {

                this.setState({
                    results: res.data.result,
                    counts_tipos: res.data.counts,
                    loading: false,
                    filters: obj
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        // this.newBasicSearch();
        this.setState(
            {
                counts_tipos: this.props.counts_tipos,
                results: this.props.results,
                ubication: this.props.ubication,
                ubi_type: this.props.ubi_type
            })
    }

    render() {
        return (
            <div>
                <CustomFiltersByMap getFilters={this.getFilters} />
                {
                    this.state.loading ? (
                        <center>
                            <ReactLoading type={"bars"} color={"#51BCDA"} />
                        </center>
                    ) :
                        <div>
                            <br />
                            <div>
                                <Alert color={this.state.results.length > 0 || this.allSelect() ? "info" : "danger"}>
                                    {
                                        this.state.results.length > 0
                                            ? (
                                                <div>
                                                    <h5><b>Resultados: </b>{this.state.results.length}</h5>
                                                    <Row className="datsBigger">
                                                        <Col>
                                                            *Archivo crudo:  <Badge pill><b>{this.state.counts_tipos.AC}</b></Badge>
                                                        </Col>
                                                        <Col>
                                                            *Archivo procesado:  <Badge pill><b>{this.state.counts_tipos.AP}</b></Badge>
                                                        </Col>
                                                        <Col>
                                                        </Col>
                                                    </Row>
                                                    <Row className="datsBigger">
                                                        <Col>
                                                            *Imagen cruda: <Badge pill> <b>{this.state.counts_tipos.IC}</b></Badge>
                                                        </Col>
                                                        <Col>
                                                            *Imagen procesada:  <Badge pill><b>{this.state.counts_tipos.IP}</b></Badge>
                                                        </Col>
                                                        <Col>
                                                            *Compilación:  <Badge pill><b>{this.state.counts_tipos.C}</b></Badge>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            )
                                            : (
                                                this.allSelect() ?
                                                    <h5> <b>Selecciona un atributo de busqueda</b></h5>
                                                    : <h5><b>No hay datos relacionados</b></h5>
                                            )

                                    }
                                </Alert>
                            </div>
                            {
                                this.state.results.length > 0 ?
                                    (
                                        <ResultsTableByMap results={this.state.results} />
                                    ) : true
                            }
                        </div>
                }

            </div>
        )
    }
};

export default PropiedadByMap;