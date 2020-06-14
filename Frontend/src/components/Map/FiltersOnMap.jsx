import React from "react";
// import { connect } from "react-redux";
import {
    Input
} from "reactstrap";

import api from "api_route.js";

class FiltersOnMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            depts: [],
            munis: [],
            fins: [],
            current_mun: [],
            current_fin: [],
            selections: {
                departamento: "Select",
                municipio: "Select",
                finca: "Select",
            }
        }
    }

    handleSelects(e) {
        var sele = { ...this.state.selections };
        sele[e.target.name] = e.target.value;
        this.props.getFilters(sele);
        this.setState({ selections: sele })
    }

    handleSelectDEPT(e) {
        // Hago esto para guardar la categoria seleccionada y adicional cambiat current_sub
        // con las subcategorias correspondientes a la categoria seleccionada
        var sele = { ...this.state.selections };
        var val = e.target.value;
        var c_mun = [];

        if (val === "-1") {
            sele["departamento"] = "Select";
        } else {
            sele["departamento"] = this.state.depts[val];
            c_mun = this.state.munis[val]
        }
        sele["municipio"] = "Select";
        sele["finca"] = "Select";
        this.props.getFilters(sele);
        this.setState({ selections: sele, current_mun: c_mun });
    }


    handleSelectMUNI(e) {
        // Hago esto para guardar la categoria seleccionada y adicional cambiat current_sub
        // con las subcategorias correspondientes a la categoria seleccionada
        var sele = { ...this.state.selections };
        var val = e.target.value;
        // Esto fue usado de emergencia para el funcionamiento
        // CUALQUIER PROBLEMA ATENCION AQUI
        val = this.findYourFinca(val);
        // ---------------------
        var c_fin = [];

        if (val === "-1") {
            sele["municipio"] = "Select";
        } else {
            sele["municipio"] = this.state.current_mun[val];
            c_fin = this.state.fins[val]
        }

        sele["finca"] = "Select";
        this.props.getFilters(sele);
        this.setState({ selections: sele, current_fin: c_fin });
    }

    findYourFinca(municipio) {

        if (municipio === "-1") {
            return "-1";
        } else {

            var aux = [];
            var c = 0;

            for (let i in this.state.munis) {
                aux = aux.concat(this.state.munis[i]);
            }

            for (let i in aux) {
                if (aux[i] === municipio) {
                    c = i;
                }
            }

            return c;
        }
    }

    async componentDidMount() {

        const res = await fetch(api.route + "/getfilters/onmap");
        var { departamentos, municipios, fincas } = await res.json();
        // console.log({ departamentos, municipios, fincas });
        this.setState({ depts: departamentos, munis: municipios, fins: fincas });
    }

    render() {
        return (
            <div style={{ "width": "160px" }}>

                <b>Departamentos</b>
                <Input onChange={this.handleSelectDEPT.bind(this)} type="select" name="cat" id="exampleSelect">
                    <option value={-1}>Select</option>
                    {
                        this.state.depts.map((e, i) => (
                            <option value={i} key={i}>{e}</option>
                        ))
                    }
                </Input>
                <b>Municipios</b>
                <Input onChange={this.handleSelectMUNI.bind(this)} value={this.state.selections.municipio} type="select" name="subcategoria" id="exampleSelect">
                    <option value={-1}>Select</option>
                    {
                        this.state.current_mun.map((e, i) => (
                            <option value={e} key={i}>{e}</option>
                        ))
                    }
                </Input>
                <b>Fincas</b>
                <Input onChange={this.handleSelects.bind(this)} value={this.state.selections.finca} type="select" name="finca" id="exampleSelect">
                    <option>Select</option>
                    {
                        this.state.current_fin.map((e, i) => (
                            <option key={i}>{e}</option>
                        ))
                    }
                </Input>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     console.log(state)
//     return { theFilters: state };
//     // return {}
// }

// const mapDispatchToPros = state => ({});

// export default connect(mapStateToProps, mapDispatchToPros)(CustomFilters);

export default FiltersOnMap;