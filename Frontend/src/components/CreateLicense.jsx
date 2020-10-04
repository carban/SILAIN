import React from "react";
import axios from 'axios';
import api from "../api_route.js";

import {
    Button, Form, FormGroup, Row, Col, Input
} from 'reactstrap';

class CreateLicense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iduser: "",
            idarticulo: 0,
        }
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post(api.route + "/license/add", this.state)
            .then(res => {
                document.getElementById("licenseForm").reset();
                alert("Licensia asignada con exito");
            })
            .catch(err => {
                alert("Error");
            })
    }

    render() {
        return (
            <div>
                <center>
                    <h4>Asignación de licensia</h4>
                </center>
                <Form onSubmit={this.handleSubmit.bind(this)} id="licenseForm">
                    <FormGroup>
                        <Row>
                            <Col>
                                <b>Email del usuario</b>
                                <Input type="email" name="iduser" onChange={this.handleInput.bind(this)} required />
                            </Col>
                            <Col>
                                <b>Id del articulo</b>
                                <Input type="number" name="idarticulo" onChange={this.handleInput.bind(this)} required />
                            </Col>
                        </Row>
                    </FormGroup>
                    <center>
                        <Button color="second" block>Create</Button>
                    </center>
                </Form>
                <hr />
            </div>
        )
    }
}

export default CreateLicense;