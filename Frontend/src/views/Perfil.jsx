import React from "react";

// reactstrap components
import {
    Container, Button
} from 'reactstrap';

// import axios from "axios";
// import ReactLoading from "react-loading";
import auth from "components/auth/auth.js";

import SNavBar from "components/SNavBar.jsx";
import api from "api_route.js";

class Perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombres: '',
            apellidos: '',
            email: '',
            pais: '',
            loading: true
        }
    }

    async componentDidMount() {
        const res = await fetch(api.route + "/users/user/" + auth.getSession().id);
        const { user } = await res.json();
        console.log(user)
        this.setState({
            nombres: user.nombres,
            apellidos: user.apellidos,
            email: user.email,
            pais: user.pais,
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
                    <h2>Bienvenido {this.state.nombres} {this.state.apellidos}</h2>
                    <b>{this.state.email}</b> | <b>{this.state.pais}</b>
                    
                    <h4>Historial de descargas</h4>


                    <Button onClick={this.logout.bind(this)}>Salir</Button>
                </Container>
            </div >
        )
    }
};

export default Perfil;