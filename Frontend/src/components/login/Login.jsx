import React from "react";

import logo from "logo.png";

import auth from "components/auth/auth.js";
import ReCAPTCHA from "react-google-recaptcha";
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

        const delay = 800;

        let data = { id_user: this.state.username, password: this.state.password };

        let obj, given;

        // dummy
        obj = {
            "token": "asdasdsa",
            "user_id": "awqweqweqw",
            "user_type": 1,
            "user_type_name": "operator"
        };

        auth.login(obj, rou => {
            this.setState({ doAnime: true });
            window.setTimeout(() => {
                this.props.history.push("/" + rou)
            }, delay);
        });

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
                                <img src={logo} width="110px" height="110px" alt="description"></img>
                                <CardTitle tag="h5">Login</CardTitle>
                            </center>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.signin} id="loginForm">
                                <FormGroup>
                                    <Label for="exampleEmail">email</Label>
                                    <Input onChange={this.handleInput} type="email" name="username" id="exampleEmail" placeholder="Login" requiered />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" placeholder="Password" required />
                                </FormGroup>

                                <center>
                                    <ReCAPTCHA
                                        sitekey="6LfP99wUAAAAAPHZbEWQ8x6fXjgBkasCd4ztoqL8"
                                        onChange={this.onChange}
                                    />
                                </center>

                                <center>
                                    <Button color="success" type="submit" disabled={this.state.disabledLoginBtn}>SIGN IN</Button>
                                    <br />
                                    <Link to="/">Home</Link>
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