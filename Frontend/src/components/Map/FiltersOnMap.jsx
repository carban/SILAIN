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
            cult: [],
            depts: {},
            munis: {},
            fins: {},
            current_dept: [],
            current_mun: [],
            current_fin: [],
            val_dept: null,
            val_muni: null,
            val_fin: null,
            selections: {
                cultivo: "Select",
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

    handleSelectCULT(e) {
        // Hago esto para guardar la categoria seleccionada y adicional cambiat current_sub
        // con las subcategorias correspondientes a la categoria seleccionada
        var sele = { ...this.state.selections };
        var val = e.target.value;
        var c_dept = [];

        if (val === "-1") {
            sele["cultivo"] = "Select";
        } else {
            sele["cultivo"] = this.state.cult[val];
            c_dept = this.state.depts[sele["cultivo"]];
        }
        sele["departamento"] = "Select";
        sele["municipio"] = "Select";
        sele["finca"] = "Select";

        this.props.getFilters(sele);
        this.setState({ selections: sele, current_dept: c_dept, val_dept: -1, val_muni: -1, val_fin: -1 });
    }

    handleSelectDEPT(e) {
        // Hago esto para guardar la categoria seleccionada y adicional cambiat current_sub
        // con las subcategorias correspondientes a la categoria seleccionada
        var sele = { ...this.state.selections };
        var val = e.target.value;
        var c_mun = [];

        if (val === "-1") {
            val = -1;
            sele["departamento"] = "Select";
        } else {
            sele["departamento"] = this.state.current_dept[val];
            c_mun = this.state.munis[sele["departamento"]];
        }
        sele["municipio"] = "Select";
        sele["finca"] = "Select";
        this.props.getFilters(sele);
        this.setState({ selections: sele, current_mun: c_mun, val_dept: val, val_muni: -1, val_fin: -1 });
    }


    handleSelectMUNI(e) {

        var sele = { ...this.state.selections };
        var val = e.target.value;
        var c_fin = [];

        if (val === "-1") {
            val = -1
            sele["municipio"] = "Select";
        } else {
            sele["municipio"] = this.state.current_mun[val];
            c_fin = this.state.fins[sele["municipio"]];
        }
        sele["finca"] = "Select";
        // console.log(sele.municipio)
        this.props.getFilters(sele);
        this.setState({ selections: sele, current_fin: c_fin, val_muni: val, val_fin: -1 });
    }

    async componentDidMount() {

        const res = await fetch(api.route + "/getfilters/onmap");
        var { departamentos, municipios, fincas, cultivos } = await res.json();
        // console.log({ departamentos, municipios, fincas } );
        this.setState({
            depts: departamentos,
            munis: municipios,
            fins: fincas,
            cult: cultivos
        });
    }

    render() {
        return (
            <div style={{ "width": "155px", "fontSize": "14px" }}>

                <b>Cultivo</b>
                <Input onChange={this.handleSelectCULT.bind(this)} type="select" id="exampleSelect">
                    <option value={-1}>Select</option>
                    {
                        this.state.cult.map((e, i) => (
                            <option value={i} key={i}>{e}</option>
                        ))
                    }
                </Input>
                <b>Departamentos</b>
                <Input onChange={this.handleSelectDEPT.bind(this)} type="select" value={this.state.val_dept} id="exampleSelect">
                    <option value={-1}>Select</option>
                    {
                        this.state.current_dept.map((e, i) => (
                            <option value={i} key={i}>{e}</option>
                        ))
                    }
                </Input>
                <b>Municipios</b>
                <Input onChange={this.handleSelectMUNI.bind(this)} value={this.state.val_muni} type="select" id="exampleSelect">
                    <option value={-1}>Select</option>
                    {
                        this.state.current_mun.map((e, i) => (
                            <option value={i} key={i}>{e}</option>
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