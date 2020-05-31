import React from "react";

// reactstrap components
// import {
//     Row, Col, Alert
// } from 'reactstrap';

// import axios from "axios";


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }
    }

    async componentDidMount() {
        const res = await fetch("http://localhost:8000/article/" + this.props.match.params.id);
        const { info } = await res.json();
        this.setState({ info: info });
    }

    render() {
        console.log()
        return (
            <div>
                <h1>{this.state.info.titulo}</h1>
                <li>
                    <ul>{this.state.info.resumen}</ul>
                    <ul>{this.state.info.categoria}</ul>
                    <ul>{this.state.info.subcategoria}</ul>
                    <ul>{this.state.info.creado}</ul>
                    <ul>{this.state.info.derechos}</ul>
                    <ul>{this.state.info.descripcion}</ul>
                    <ul>{this.state.info.disponibilidad}</ul>
                    <ul>{this.state.info.finca}</ul>
                    <ul>{this.state.info.formato}</ul>
                    <ul>{this.state.info.municipio}</ul>
                    <ul>{this.state.info.publicador}</ul>
                    <ul>{this.state.info.tipo}</ul>
                    <ul>{this.state.info.tamano}</ul>
                    <ul>{this.state.info.url}</ul>
                </li>
            </div>
        )
    }
};

export default Article;