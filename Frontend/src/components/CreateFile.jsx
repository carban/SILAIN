import React from "react";
import CustomFilters from 'components/CustomFilters';
// import axios from 'axios';

import {
    Button, Input, Form, FormGroup, Row, Col
} from 'reactstrap';

class CreateFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            publicador: "",
            resumen: "",
            descripcion: "",
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

    sendForm(){

    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.sendForm();
    }

    getFilters(obj) {
        this.setState({ filters: obj });
    }

    render() {
        return (
            <div>
                <h4>creación de datos</h4>
                {/* <form method="POST" action={api.route + "/article/crear"} enctype="multipart/form-data"> */}
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup>
                        <CustomFilters getFilters={this.getFilters.bind(this)} />
                        <br />
                        <Row>
                            <Col>
                                <Input type="text" placeholder="Titulo" name="titulo" onChange={this.handleInput.bind(this)} />
                            </Col>
                            <Col>
                                <Input type="text" placeholder="Publicador" name="publicador" onChange={this.handleInput.bind(this)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input type="text" placeholder="Resumen" name="resumen" onChange={this.handleInput.bind(this)} />
                            </Col>
                            <Col>
                                <Input type="text" placeholder="Descripcion" name="descripcion" onChange={this.handleInput.bind(this)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input type="text" placeholder="Palabras clave separadas por coma (,)" name="pclave" onChange={this.handleInput.bind(this)} />
                            </Col>
                            <Col>
                                <b>Estado:</b> <Button color="success">Publico</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Input type="file" name="file" onChange={this.handleInput.bind(this)} />
                    <Button color="warning" block>Create</Button>
                    {/* <Input type="submit" value="Upload" /> */}
                </Form>
                <hr />
            </div>
        )
    }
}

export default CreateFile;