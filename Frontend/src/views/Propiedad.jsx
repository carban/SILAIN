import React from "react";

// reactstrap components
import {
    Row, Col, Alert
} from 'reactstrap';

import axios from "axios";
import ReactLoading from "react-loading";

import CustomFilters from "components/CustomFilters.jsx";
import ResultsTable from "components/ResultsTable";

import api from "api_route.js";

class Propiedad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            counts_tipos: {},
            filters: {
                categoria: "Select",
                subcategoria: "Select",
                municipio: "Select",
                tipo: "Select",
                formato: "Select",
                finca: "Select",
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
        const basicURL = api.route + "/basic/search_by_filter";
        this.setState({ loading: true })
        axios.post(basicURL, { filters: obj, word: "" })
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
    }

    render() {
        return (
            <div>
                <CustomFilters getFilters={this.getFilters} />
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
                                                    <h5><b>Resultados segun los filtros: </b>{this.state.results.length}</h5>
                                                    <Row className="datsBigger">
                                                        <Col>
                                                            *Archivo crudo:  <b>{this.state.counts_tipos.AC}</b>
                                                        </Col>
                                                        <Col>
                                                            *Archivo procesado:  <b>{this.state.counts_tipos.AP}</b>
                                                        </Col>
                                                        <Col>
                                                            *Imagen cruda:  <b>{this.state.counts_tipos.IC}</b>
                                                        </Col>
                                                        <Col>
                                                            *Imagen procesada:  <b>{this.state.counts_tipos.IP}</b>
                                                        </Col>
                                                        <Col>
                                                            *Compilación:  <b>{this.state.counts_tipos.C}</b>
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
                                        <ResultsTable results={this.state.results} />
                                    ) : true
                            }
                        </div>
                }

            </div>
        )
    }
};

export default Propiedad;