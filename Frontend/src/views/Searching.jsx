import React from "react";

// reactstrap components
import {
  Row, Input, Col,
  Container, Alert, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';

import axios from "axios";

// import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer.jsx";

import SNavBar from "components/SNavBar.jsx";
import CustomFilters from "components/CustomFilters.jsx";

import ReactLoading from "react-loading";
import ResultsTable from "components/ResultsTable";

class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.location.words,
      word_searched: "",
      results: [],
      counts_tipos: {},
      filters: {
        cat: "Select",
        sub: "Select",
        municipio: "Select",
        tipo: "Select",
        formato: "Select"
      },
      loading: false,
      loading_filter: false
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  newBasicSearch = e => {

    if (this.state.words !== "") {
      const basicURL = "http://localhost:8000/basic/search";

      axios.post(basicURL, { words: this.state.words })
        .then(res => {
          this.setState({ results: res.data.result, counts_tipos: res.data.counts, word_searched: this.state.words, loading: true, loading_filter: true });
        })
        .catch(err => {
          console.log(err);
        })
      this.setState({ loading: false, loading_filter: false });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.newBasicSearch();
  }

  getFilters = (obj, load) => {
    this.setState({ loading_filter: false })
    setTimeout(() => {
      this.setState({ filters: obj, loading_filter: true })
    }, 150)

  }

  componentDidMount() {
    this.newBasicSearch();
  }

  render() {

    // const resultTable = <ResultsTable word_searched={this.state.words} results={this.state.results} counts_tipos={this.state.counts_tipos} />;

    // const resultsFiltered = this.state.results;
    const resultsFiltered = this.state.results.filter(ele => (
      this.state.filters.tipo !== "Select" ? ele.tipo === this.state.filters.tipo : true
    ));


    return (
      <div>
        <SNavBar />
        <Container>
          <div >
            <Col md="12" lg="12">
              <Row>
                <Col md="12" lg="12">
                  <form onSubmit={this.handleSubmit}>
                    <InputGroup className="no-border">
                      <Input onChange={this.handleInput} value={this.state.words !== "error" ? this.state.words : "error"} name="words" className="inputSearcher" placeholder="Palabras Clave..." />
                      <InputGroupAddon addonType="append">
                        <InputGroupText onClick={this.handleSubmit} className="icon-click">
                          <i className="nc-icon nc-zoom-split" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </form>
                </Col>
              </Row>
              <CustomFilters getFilters={this.getFilters} />
            </Col>
            <br />
          </div>
          {
            !this.state.loading ? (
              <center>
                <ReactLoading type={"bars"} color={"#51BCDA"} />
              </center>
            ) : (
                <div>
                  <div>
                    <Alert color={this.state.results.length > 0 ? "info" : "danger"}>
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
                            <h5><b>No hay datos relacionados con: "{this.state.word_searched}": </b></h5>
                          )
                      }
                    </Alert>
                  </div>
                  {
                    !this.state.loading_filter ? (
                      <center>
                        <ReactLoading type={"bars"} color={"#51BCDA"} />
                      </center>
                    )
                      : (
                        <ResultsTable word_searched={this.state.words} results={resultsFiltered} counts_tipos={this.state.counts_tipos} />
                      )
                  }
                </div>
              )
          }

        </Container>
        <Footer />
      </div>
    )
  }
};

export default Searching;