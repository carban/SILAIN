import React from "react";

// reactstrap components
import {
    Container, Button
} from 'reactstrap';

// import axios from "axios";
// import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

import auth from "components/auth/auth.js";

import SNavBar from "components/SNavBar.jsx";
import api from "api_route.js";

class Perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            hist: [],
            loading: true
        }
    }

    async componentDidMount() {
        const res = await fetch(api.route + "/users/user/" + auth.getSession().id);
        const res_hist = await fetch(api.route + "/users/user/des_hist/" + auth.getSession().id);
        const { user } = await res.json();
        const { hist } = await res_hist.json();
        this.setState({
            user: user,
            hist: hist,
            loading: false
        });
    }

    logout() {
        auth.logout(() => this.props.history.push("/"));
    }

    render() {
        return (
            <div>
                <SNavBar />
                <Container>
                    <h2>Bienvenido {this.state.user.nombres} {this.state.user.apellidos}</h2>
                    <b>{this.state.user.email}</b> | <b>{this.state.user.pais}</b>

                    <h4>Historial de descargas</h4>
                    <ul>
                        {
                            this.state.hist.length !== 0 ?
                                this.state.hist.map((ele, i) => (
                                    <li key={i}>
                                        <Link to={"/article/" + ele.idmetadato}>{ele.titulo}</Link>
                                    </li>
                                ))
                                : <b>No has hecho ninguna descarga todavía</b>
                        }
                    </ul>


                    <Button onClick={this.logout.bind(this)}>Salir</Button>
                </Container>
            </div >
        )
    }
};

export default Perfil;