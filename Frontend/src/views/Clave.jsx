import React from "react";

// reactstrap components
import {
    Row, Input, Col,
    Alert, InputGroup, InputGroupAddon, InputGroupText, Badge, Container
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
            npages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
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

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.newBasicSearch();
    }

    newBasicSearch(e) {

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


    getFilters(obj) {
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
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <InputGroup className="no-border">
                                <Input onChange={this.handleInput.bind(this)} value={this.state.words} name="words" placeholder="Escriba una palabra clave..." />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText onClick={this.handleSubmit.bind(this)} className="icon-click">
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
            <Container>
                <div className="searchBody" style={{ "marginBottom": "323px" }}>
                    {keyWord}
                    <CustomFilters getFilters={this.getFilters.bind(this)} />
                    {
                        this.state.loading ? (
                            <center>
                                <ReactLoading type={"bars"} color={"#A5C80A"} />
                            </center>
                        ) :
                            <div>
                                <br />
                                <div>
                                    <Alert color={this.state.results.length > 0 || this.state.word_searched === "" ? "success" : "danger"}
                                        style={{ paddingLeft: "10px" }}
                                    >
                                        {
                                            this.state.results.length > 0
                                                ? (
                                                    <div>
                                                        <h5><b>Resultados para "{this.state.word_searched}": </b>{this.state.results.length}</h5>
                                                        <Row className="datsBigger">
                                                            <Col>
                                                                *Archivo crudo:  <Badge pill><b>{this.state.counts_tipos.AC}</b></Badge>
                                                            </Col>
                                                            <Col>
                                                                *Archivo procesado:  <Badge pill><b>{this.state.counts_tipos.AP}</b></Badge>
                                                            </Col>
                                                            <Col>
                                                                *Imagen cruda:  <Badge pill><b>{this.state.counts_tipos.IC}</b></Badge>
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
                                            <div>
                                                <ResultsTable results={this.state.results} />
                                                <center>

                                                    {
                                                        this.state.npages.map(ele => (
                                                            <button>{ele}</button>
                                                        ))
                                                    }
                                                </center>
                                            </div>
                                        ) : true
                                }
                            </div>
                    }
                </div>
            </Container>
        )
    }
};

export default Clave;