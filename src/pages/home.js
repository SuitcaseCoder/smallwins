import React from "react";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
// import Item from '@mui/material/Item'


// import Container from '@mui/material/Container';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Nav from "../components/Nav";
import Today from "./today";
// import SignUp from "../components/SignUp";
import { useAuth } from "../hooks/useAuth";



export const Home = () => {
  const { user, isAuthenticated } = useAuth();
  // console.log(user);

    return(
      <>
 
      <Container fluid  justify-content-md-center>
      <Row>
        <Col className="align-items-stretch header-col">
          <div className="transparent-layer">
          <div>
          <h1>small WINS</h1>
          </div>
          <div>
            <h4>Celebrate your small wins daily and keep track of them forever!</h4>
            <button className="btn-signup">Sign Up</button>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
    </>
        
    )
}

export default Home;
