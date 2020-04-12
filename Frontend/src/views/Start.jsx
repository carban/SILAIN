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
    Row, Col
} from "reactstrap";

import logo from "logo.png";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            words: "Arroz valle del cauca",
            doAnime: false
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    setRedirect = () => {
        this.setState({ redirect: true, doAnime: true });       
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/searching',
                state: { words: this.state.words }
            }} />;
        }
    }

    render() {
        return (
            <div className={this.state.doAnime ? "animated fadeOutUpBig faster" : ""}>
                {/* <DemoNavbar {...this.props} /> */}
                <div className="contentStart">
                    <center>
                        <img src={logo} width="280px" height="280px" alt="description"></img>
                        <br></br>
                        <br></br>
                        <b id="logoMeans">Sistema Del laboratorio de agricultura xd no c</b>
                        <br></br>
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