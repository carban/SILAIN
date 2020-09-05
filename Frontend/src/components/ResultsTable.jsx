import React from "react";

import {
    Table, 
    //Button
} from "reactstrap";

import { NavLink } from "react-router-dom";


class ResultsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.results,
            label: true
        }
    }

    changeLabel() {
        this.setState({ label: !this.state.label });
    }

    render() {
        return (
            <div>
                <Table hover={true}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo y resumen</th>
                            <th>Publicador</th>
                            <th>Tipo</th>
                            <th>Formato</th>
                            <th>Tamano</th>
                            <th>creado</th>
                            <th>disponibilidad</th>
                            {/* <th>Acciones</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.results.map((e, i) => (
                                <tr key={i}>
                                    <th scope="row">{(20 * this.props.currentPage) + i + 1}</th>
                                    <td>
                                        <b>
                                            <NavLink to={"/article/" + e.idmetadato}
                                                className="silain_green_links"
                                            >
                                                {e.titulo}
                                            </NavLink>
                                        </b>
                                        <br />
                                        <i>{e.resumen}</i>
                                    </td>
                                    <td className="centerTd">
                                        {e.publicador} <br />
                                    </td>
                                    <td className="centerTd">
                                        {e.tipo}
                                    </td>
                                    <td className="centerTd">
                                        {e.formato} <br />
                                    </td>
                                    <td className="centerTd">
                                        {e.tamano}
                                    </td>
                                    <td className="centerTd">
                                        {e.creado} <br />
                                    </td>
                                    <td className="centerTd">
                                        {e.disponibilidad}
                                    </td>
                                    {/* <td className="centerTd">
                                        <Button onClick={this.changeLabel.bind(this)} color={this.state.label ? "success" : "danger"}>
                                            {this.state.label ? "Publico" : "Privado"}
                                            </Button>
                                    </td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ResultsTable;