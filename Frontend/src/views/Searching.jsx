import React from "react";

// reactstrap components
import {
  Row, Input, Col,
  Container, Table, Alert, InputGroup, InputGroupAddon, InputGroupText,
} from 'reactstrap';
import axios from "axios";

// import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer.jsx";

import SNavBar from "components/SNavBar.jsx";
import CustomFilters from "components/CustomFilters.jsx";
import ResultsTable from "components/ResultsTable";

class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.location.state.words,
      word_searched: "",
      results: [],
      counts_tipos: {},
      filters: {
        cat: "Select",
        sub: "Select",
        municipio: "Select",
        tipo: "Select",
        formato: "Select"
      }
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  newBasicSearch = e => {

    const basicURL = "http://localhost:8000/basic/search";

    axios.post(basicURL, { words: this.state.words })
      .then(res => {
        this.setState({ results: res.data.result, counts_tipos: res.data.counts, word_searched: this.state.words });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.newBasicSearch();
  }

  getFilters = obj => {
    this.setState({ filters: obj })
  }

  componentDidMount() {
    this.newBasicSearch();
  }

  render() {

    // const resultTable = <ResultsTable word_searched={this.state.words} results={this.state.results} counts_tipos={this.state.counts_tipos} />;

    // const resultsFiltered = this.state.results;
    const resultsFiltered = this.state.results.filter(ele => (
      this.state.filters.tipo !== "Select" ? ele.tipo == this.state.filters.tipo : true
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
          <div>
            <div>
              <Alert color={this.state.results.length > 0 ? "success" : "danger"}>
                {
                  this.state.results.length > 0
                    ? (
                      <div>
                        <h5><b>Resultados para "{this.state.word_searched}": </b>{this.state.results.length}</h5>
                        <Row>
                          <Col>
                            <b>*Archivo crudo:  {this.state.counts_tipos.AC}</b>
                          </Col>
                          <Col>
                            <b>*Archivo procesado:  {this.state.counts_tipos.AP}</b>
                          </Col>
                          <Col>
                            <b>*Imagen cruda:  {this.state.counts_tipos.IC}</b>
                          </Col>
                          <Col>
                            <b>*Imagen procesada:  {this.state.counts_tipos.IP}</b>
                          </Col>
                          <Col>
                            <b>*Compilación:  {this.state.counts_tipos.C}</b>
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
            <Table hover={true}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Titulo y resumen</th>
                  <th>Publicador</th>
                  <th>Tipo</th>
                  <th>Formato</th>
                  <th>Tamano</th>
                  <th>creado</th>
                  <th>disponibilidad</th>
                </tr>
              </thead>
              <tbody>
                {
                  resultsFiltered.map((e, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>
                        <b>{e.titulo}</b> <br />
                        <i>{e.resumen}</i>
                      </td>
                      <td className="centerTd">
                        {e.publicador} <br />
                      </td>
                      <td className="centerTd">
                        {e.tipo}
                      </td>
                      <td className="centerTd">
                        {e.formato} <br />
                      </td>
                      <td className="centerTd">
                        {e.tamano}
                      </td>
                      <td className="centerTd">
                        {e.creado} <br />
                      </td>
                      <td className="centerTd">
                        {e.disponibilidad}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>

        </Container>
        <Footer />
      </div>
    )
  }
};

export default Searching;