import React from "react";

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
            username: '',
            password: '',
            doAnime: false,
            errorLogin: false,
            messageError: "",
        };
    }

    onChange = params => {
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
                                <h2>Crear Cuenta</h2>
                            </center>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.signin} id="loginForm">
                                <FormGroup>
                                    <Label for="exampleEmail">email</Label>
                                    <Input onChange={this.handleInput} type="email" name="username" id="exampleEmail" requiered />
                                    <Label>Nombres</Label>
                                    <Input onChange={this.handleInput} name="text" id="examplePassword" required />
                                    <Label>Apellidos</Label>
                                    <Input onChange={this.handleInput} name="text" id="examplePassword" required />
                                    <Label for="examplePassword">Contrasena</Label>
                                    <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" required />
                                    <Label for="examplePassword">Confirmar Contrasena</Label>
                                    <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" required />

                                </FormGroup>
                                <center>
                                    <Button color="success" type="submit">REGISTRAR</Button>
                                    <br />
                                    <b>
                                        <Link to="/login">Iniciar Sesión</Link>
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