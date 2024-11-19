import React from "react"

import { Container } from 'react-bootstrap';

import Header from '../components/Header/Header'

// style
import './styles/Home.css';

// import Tools from '../../utils/Tools';

const Home: React.FC = () =>{
    return(
        <div id="container">
            <Container>
                <Header />
            </Container>
        </div>
    );
}

export default Home;