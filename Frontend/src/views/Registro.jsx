import React from "react";

import logo from "logo.png";

// import auth from "components/auth/auth.js";
import axios from 'axios';


import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Col, Form, FormGroup, Label, Input, Button, Alert
} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledLoginBtn: true,
            username: '',
            password: '',
            doAnime: false,
            errorLogin: false,
            messageError: "",
        };
    }

    onChange = params => {
        this.setState({
            disabledLoginBtn: false
        });
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    signin = e => {
        e.preventDefault();

        // const delay = 800;

        // let data = { id_user: this.state.username, password: this.state.password };

        // let obj, given;

    
    }

    render() {

        const alert = (this.state.errorLogin) ? <Alert className="animated rubberBand" color="danger">
            <center>
                <h6>{this.state.messageError}</h6>
            </center>
        </Alert> : true;

        return (
            <div>
                <Col md="4" id="login">
                    {alert}
                    <Card id="cardLogin" className={this.state.doAnime ? "animated zoomOutUp" : " "}>
                        <CardHeader>
                            <center>
                                <img src={logo} width="210px" height="210px" alt="description"></img>
                            </center>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.signin} id="loginForm">
                                <FormGroup>
                                    <Label for="exampleEmail">email</Label>
                                    <Input onChange={this.handleInput} type="email" name="username" id="exampleEmail" requiered />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Contrasena</Label>
                                    <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" required />
                                </FormGroup>
                                <center>
                                    <Button color="success" type="submit" disabled={this.state.disabledLoginBtn}>ENTRAR</Button>
                                    <br />
                                    <b>
                                        <Link to="/">Crea una cuenta</Link>
                                    </b>
                                    <br />
                                    <b>
                                        <Link to="/">Inicio</Link>
                                    </b>
                                </center>
                            </Form>
                        </CardBody>
                        <CardFooter>
                        </CardFooter>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default Login;