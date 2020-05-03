import React from "react";

import {
    Table
} from "reactstrap";

class ResultsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word_searched: this.props.word_searched,
            results: this.props.results,
            counts_tipos: this.props.counts_tipos
        }
    }

    render() {

        // console.log(this.state.results);

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.results.map((e, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>
                                        <b>{e.titulo}</b> <br />
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