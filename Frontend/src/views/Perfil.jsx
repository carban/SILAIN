import React from "react";

// import logo from "logo.png";

// import axios from 'axios';

// import { Link } from "react-router-dom";

// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Col, Form, FormGroup, Label, Input, Button, Alert
// } from "reactstrap";

class Perfil extends React.Component {
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

    render() {
        return (
            <div>
                <h1>PERFIL</h1>
            </div>
        )
    }
}

export default Perfil;