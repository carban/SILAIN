import React from "react";
// import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

import { Redirect } from "react-router-dom";

import {
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    Container,
    Button,
    Col, Row
} from "reactstrap";

import logo from "logo.png";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            redirect_by_searchType: false,
            words: "",
            search_types: {
                clave: true,
                propiedad: false,
                mapa: false,
                diagrama: false
            },
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    setRedirect = () => {
        if (this.state.words !== "") {
            this.setState({ redirect: true });
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            const w = this.state.words;
            return <Redirect to={{
                pathname: '/searching',
                words: w,
                search_types: this.state.search_types
            }} />;
        }
    }

    setRedirect_searchType = type => {
        var types = { ...this.state.search_types };
        for(let i in types){
            types[i] = false;
        }
        types[type] = true;
        this.setState({ redirect: true, search_types: types })
    }

    render() {
        return (
            <div>
                <div className="contentStart">
                    <center>
                        <img src={logo} width="280px" height="280px" alt="description"></img>
                        <br></br>
                        <br></br>
                        <b id="logoMeans">Sistema de información del laboratorio de agricultura inteligente</b>
                        <br></br>
                        <br></br>
                        <Col md="6">
                            <Row>
                                <Col sm="3" md="3" lg="3">
                                    <button className="ButtonLikeLinkSelected" data-toggle="tooltip" title="Realiza busquedas escribiendo palabras clave">
                                        Palabras Clave
                                    </button>
                                </Col>
                                <Col sm="3" md="3" lg="3">
                                    <button onClick={() => this.setRedirect_searchType("propiedad")} className="ButtonLikeLink" data-toggle="tooltip" title="Realiza busquedas seleccionando una propiedad">
                                        Propiedades
                                    </button>
                                </Col>
                                <Col sm="3" md="3" lg="3">
                                    <button onClick={() => this.setRedirect_searchType("mapa")} className="ButtonLikeLink" data-toggle="tooltip" title="Realiza busquedas explorando un mapa">
                                        Mapa
                                    </button>
                                </Col>
                                <Col sm="3" md="3" lg="3">
                                    <button onClick={() => this.setRedirect_searchType("diagrama")} className="ButtonLikeLink" data-toggle="tooltip" title="Realiza busquedas explorando diagramas">
                                        Diagramas
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                        <br></br>
                        <Container>
                            <Col md="7" sm="12" xs="12">
                                <form onSubmit={this.setRedirect}>
                                    <InputGroup className="no-border">
                                        <Input value={this.state.words} onChange={this.handleInput} name="words" className="inputSearcher" placeholder="Palabras Clave..." />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText>
                                                <i className="nc-icon nc-zoom-split" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </form>
                            </Col>
                        </Container>
                        <Button color="info" onClick={this.setRedirect}>Buscar</Button>
                        {this.state.redirect ? this.renderRedirect() : true}
                    </center>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Start;