import React from "react";

// reactstrap components
import {
    Row, Input, Col,
    Alert, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';

import axios from "axios";
import ReactLoading from "react-loading";

import CustomFilters from "components/CustomFilters.jsx";
import ResultsTable from "components/ResultsTable";

import api from "api_route.js";

class Clave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: this.props.location.words || "",
            word_searched: "",
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


    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.newBasicSearch();
    }

    newBasicSearch = e => {

        if (this.state.words !== "") {
            const basicURL = api.route + "/basic/search_by_filter";

            axios.post(basicURL, { filters: this.state.filters, word: this.state.words })
                .then(res => {
                    this.setState({
                        results: res.data.result,
                        counts_tipos: res.data.counts,
                        word_searched: this.state.words,
                        loading: false,
                    });
                })
                .catch(err => {
                    console.log(err);
                })
            this.setState({ loading: true });
        }
    }


    getFilters = obj => {
        if (this.state.word_searched !== "") {
            const basicURL = api.route + "/basic/search_by_filter";
            this.setState({ loading: true })
            axios.post(basicURL, { filters: obj, word: this.state.word_searched })
                .then(res => {

                    this.setState({
                        results: res.data.result,
                        counts_tipos: res.data.counts,
                        word_searched: this.state.words,
                        loading: false,
                        filters: obj
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            this.setState({
                filters: obj
            });
        }
    }

    componentDidMount() {
        this.newBasicSearch();
    }

    render() {

        const keyWord = <div>
            <Col md="12" lg="12">
                <Row>
                    <Col md="12" lg="12">
                        <form onSubmit={this.handleSubmit}>
                            <InputGroup className="no-border">
                                <Input onChange={this.handleInput} value={this.state.words} name="words" placeholder="Palabras Clave..." />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText onClick={this.handleSubmit} className="icon-click">
                                        <i className="nc-icon nc-zoom-split" />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </form>
                    </Col>
                </Row>
            </Col>
        </div>

        return (
            <div>
                {keyWord}
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
                                <Alert color={this.state.results.length > 0 || this.state.word_searched === "" ? "info" : "danger"}>
                                    {
                                        this.state.results.length > 0
                                            ? (
                                                <div>
                                                    <h5><b>Resultados para "{this.state.word_searched}": </b>{this.state.results.length}</h5>
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
                                                this.state.word_searched !== ""
                                                    ?
                                                    <h5><b>No hay datos relacionados con: "{this.state.word_searched}"</b></h5>
                                                    :
                                                    <h5><b>Escribe una palabra clave</b></h5>
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

export default Clave;