import React from "react";

// reactstrap components
import {
    Row, Col, Alert
} from 'reactstrap';

import axios from "axios";

import CustomFiltersPorFinca from "components/CustomFiltersPorFinca.jsx";

import ReactLoading from "react-loading";
import ResultsTablePorFinca from "components/ResultsTablePorFinca";

class PropiedadPorFinca extends React.Component {
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
        const basicURL = "http://localhost:8000/map/ubication_by_filter";
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
                <CustomFiltersPorFinca getFilters={this.getFilters} />
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
                                                            *Archivo crudo:  <b>{this.state.counts_tipos.AC}</b>
                                                        </Col>
                                                        <Col>
                                                            *Archivo procesado:  <b>{this.state.counts_tipos.AP}</b>
                                                        </Col>
                                                        <Col>
                                                        </Col>
                                                    </Row>
                                                    <Row className="datsBigger">
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
                                        <ResultsTablePorFinca results={this.state.results} />
                                    ) : true
                            }
                        </div>
                }

            </div>
        )
    }
};

export default PropiedadPorFinca;