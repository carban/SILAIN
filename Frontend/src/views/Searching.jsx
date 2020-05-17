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
        categoria: "Select",
        subcategoria: "Select",
        municipio: "Select",
        tipo: "Select",
        formato: "Select"
      },
      loading: false,
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  newBasicSearch = e => {

    if (this.state.words !== "") {
      const basicURL = "http://localhost:8000/basic/search_by_filter";

      axios.post(basicURL, { filters: this.state.filters, word: this.state.words })
        .then(res => {
          // console.log(res.data.result)
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

  handleSubmit = e => {
    e.preventDefault();
    this.newBasicSearch();
  }

  getFilters = obj => {
    const basicURL = "http://localhost:8000/basic/search_by_filter";
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
  }

  componentDidMount() {
    this.newBasicSearch();
  }

  render() {
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
                      <Input onChange={this.handleInput} value={this.state.words} name="words" className="inputSearcher" placeholder="Palabras Clave..." />
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
            this.state.loading ? (
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
                  <ResultsTable word_searched={this.state.words} results={this.state.results} counts_tipos={this.state.counts_tipos} />
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