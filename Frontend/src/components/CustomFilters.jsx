import React from "react";
import axios from "axios";

import {
    Row, Col, Input
} from "reactstrap";

class CustomFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: [],
            subs: [],
            municipios: [],
            tipos: [],
            formatos: [],
            current_sub: [],
            selections: {
                cat: "Select",
                sub: "Select",
                municipio: "Select",
                tipo: "Select",
                formato: "Select"
            }
        }
    }

    handleSelects = e => {
        var sele = { ...this.state.selections };
        sele[e.target.name] = e.target.value;
        this.props.getFilters(sele);
        this.setState({ selections: sele })
        
    }

    handleSelectCAT = e => {
        // Hago esto para guardar la categoria seleccionada y adicional cambiat current_sub
        // con las subcategorias correspondientes a la categoria seleccionada
        var sele = { ...this.state.selections };
        var val = e.target.value;
        var c_sub = [];

        if (val === "-1") {
            sele["cat"] = "Select";
        } else {
            sele["cat"] = this.state.cats[val];
            c_sub = this.state.subs[val]
        }
        sele["sub"] = "Select";
        this.props.getFilters(sele);
        this.setState({ selections: sele, current_sub: c_sub });
        
    }

    componentDidMount() {

        const url = "http://localhost:8000/getfilters/";

        axios.get(url)
            .then(res => {
                var { cats, subs, municipios, tipos, formatos } = res.data;
                // console.log(res.data)
                this.setState({ cats: cats, subs: subs, municipios: municipios, tipos: tipos, formatos: formatos });
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <div>

                <Row>
                    <Col>
                        <b>Categoria</b>
                        <Input onChange={this.handleSelectCAT} type="select" name="cat" id="exampleSelect">
                            <option value={-1}>Select</option>
                            {
                                this.state.cats.map((e, i) => (
                                    <option value={i} key={i}>{e}</option>
                                ))
                            }
                        </Input>
                    </Col>
                    <Col>
                        <b>Subcategoria</b>
                        <Input onChange={this.handleSelects} value={this.state.selections.sub} type="select" name="sub" id="exampleSelect">
                            <option>Select</option>
                            {
                                this.state.current_sub.map((e, i) => (
                                    <option key={i}>{e}</option>
                                ))
                            }
                        </Input>
                    </Col>
                    <Col>
                        <b>Municipios</b>
                        <Input onChange={this.handleSelects} type="select" name="municipio" id="exampleSelect">
                            <option>Select</option>
                            {
                                this.state.municipios.map((e, i) => (
                                    <option key={i}>{e.municipio}</option>
                                ))
                            }
                        </Input>
                    </Col>
                    <Col>
                        <b>Tipo</b>
                        <Input onChange={this.handleSelects} type="select" name="tipo" id="exampleSelect">
                            <option>Select</option>
                            {
                                this.state.tipos.map((e, i) => (
                                    <option key={i}>{e.tipo}</option>
                                ))
                            }
                        </Input>
                    </Col>
                    <Col>
                        <b>Formato</b>
                        <Input onChange={this.handleSelects} type="select" name="formato" id="exampleSelect">
                            <option>Select</option>
                            {
                                this.state.formatos.map((e, i) => (
                                    <option key={i}>{e.formato}</option>
                                ))
                            }
                        </Input>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CustomFilters;


