import React from "react";

// reactstrap components
import {
    Container, Button
} from 'reactstrap';

// import axios from "axios";
// import ReactLoading from "react-loading";
import auth from "components/auth/auth.js";

import SNavBar from "components/SNavBar.jsx";
// import api from "api_route.js";

class Perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            loading: true
        }
    }

    async componentDidMount() {
        // const res = await fetch(api.route + "/article/" + this.props.match.params.id);
        // const { info } = await res.json();
        // this.setState({ info: info, loading: false });
    }

    logout(){
        auth.logout(() => this.props.history.push("/"));
    }

    render() {
        return (
            <div>
                <SNavBar />
                <Container>
                    <h2>Bienvenido Foo!</h2>
                    <Button onClick={this.logout.bind(this)}>Salir</Button>
                </Container>
            </div >
        )
    }
};

export default Perfil;