import React from "react";
import CustomFilters from 'components/CustomFilters';
import axios from 'axios';
import api from "../api_route.js";

import {
    Button, Form, FormGroup, Row, Col, Input
} from 'reactstrap';

class CreateFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            publicador: "CIBioFi-GISMODEL",
            derechos: "",
            resumen: "",
            descripcion: "",
            lote: "",
            fase: "",
            pclave: "",
            publico: true,
            file: "",
            filters: {
                categoria: "Select",
                subcategoria: "Select",
                municipio: "Select",
                tipo: "Select",
                formato: "Select",
                finca: "Select",
            },
        }
    }

    validateFilters() {
        for (let i in this.state.filters) {
            if (this.state.filters[i] !== "Select") {
                return false;
            }
        }
        return true;
    }

    validateParameters() {
        return this.state.titulo !== "" &&
            this.state.publciador !== "" &&
            this.state.derechos !== "" &&
            this.state.resumen !== "" &&
            this.state.descripcion !== "" &&
            this.state.pclave !== "" &&
            this.state.file !== ""
    }

    sendForm() {
        // if (this.validateFilters() && this.validateParameters()) {
        var formData = new FormData();

        formData.append("file", this.state.file, this.state.file.name);
        formData.append("titulo", this.state.titulo);
        formData.append("publicador", this.state.publicador);
        formData.append("derechos", this.state.derechos);
        formData.append("resumen", this.state.resumen);
        formData.append("descripcion", this.state.descripcion);
        formData.append("lote", this.state.lote);
        formData.append("fase", this.state.fase);
        formData.append("pclave", this.state.pclave);
        formData.append("publico", this.state.publico);
        formData.append("filters", JSON.stringify(this.state.filters));

        axios.post(api.route + "/article/crear", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                document.getElementById("createForm").reset();
                this.setState({
                    titulo: "",
                    publicador: "CIBioFi-GISMODEL",
                    derechos: "",
                    resumen: "",
                    descripcion: "",
                    lote: "",
                    fase: "",
                    pclave: "",
                    publico: true,
                    file: "",
                })
                alert("Cargado exitosamente");
            })
            .catch(err => {
                console.log(err);
            })
        // }
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.sendForm();
    }

    handleFile(e) {
        let file = e.target.files[0];
        this.setState({ "file": file });
    }

    getFilters(obj) {
        this.setState({ filters: obj });
    }

    render() {
        return (
            <div>
                <h4>creación de datos</h4>
                <Form onSubmit={this.handleSubmit.bind(this)} id="createForm">
                    <FormGroup>
                        <CustomFilters getFilters={this.getFilters.bind(this)} />
                        <br />
                        <Row>
                            <Col>
                                <b>Titulo</b>
                                <Input type="text" placeholder="Titulo" name="titulo" onChange={this.handleInput.bind(this)} required />
                            </Col>
                            <Col>
                                <b>Publicador</b>
                                <Input type="text" placeholder="Publicador" name="publicador" onChange={this.handleInput.bind(this)} value="CIBioFi-GISMODEL" required />
                            </Col>
                            <Col>
                                <b>Derechos</b>
                                <Input type="text" placeholder="Derechos" name="derechos" onChange={this.handleInput.bind(this)} required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <b>Resumen</b>
                                <Input type="text" placeholder="Resumen" name="resumen" onChange={this.handleInput.bind(this)} required />
                            </Col>
                            <Col>
                                <b>Descripcion</b>
                                <Input type="text" placeholder="Descripcion" name="descripcion" onChange={this.handleInput.bind(this)} required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <b>Lote</b>
                                <Input type="text" placeholder="Lote" name="lote" onChange={this.handleInput.bind(this)} required />
                            </Col>
                            <Col>
                                <b>Fase</b>
                                <Input type="number" placeholder="Fase" name="fase" onChange={this.handleInput.bind(this)} required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <b>Palabras Clave</b>
                                <Input type="text" placeholder="Palabras clave separadas por coma (,)" name="pclave" onChange={this.handleInput.bind(this)} required />
                            </Col>
                            <Col>
                                <b>Estado:</b> <Button
                                    color={this.state.publico ? "success" : "danger"} onClick={() => this.setState({ publico: !this.state.publico })} required>
                                    {this.state.publico ? "publico" : "privado"}
                                </Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Input type="file" name="file" onChange={this.handleFile.bind(this)} required/>
                    <center>
                        <Button color="warning">Create</Button>
                    </center>
                </Form>

                {/* <form method="POST" action={api.route + "/article/crear"} enctype="multipart/form-data">
                    <Input type="submit" value="Upload" />
                </form> */}
                <hr />
            </div>
        )
    }
}

export default CreateFile;