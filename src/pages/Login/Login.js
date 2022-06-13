import React from "react";
import './Login.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import {
    Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, NavLink, Container, Offcanvas, FormControl, Form,
    Card, CardGroup, CardDeck, CardColumns, CardBody, CardHeader, CardFooter, Table, DatePicker,
} from 'react-bootstrap';
import {Fondo} from '../../images/TERRALUZ_GRUPOMARTI_004.jpg';

const Login = () => {
    return (
        <div className="content">
            <div className="container">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossorigin="anonymous"
            />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css" rel="stylesheet" />
            <script src="https://cdn.datatables.net/v/bs4-4.1.1/dt-1.10.18/datatables.min.js"></script>

            <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
            <script src="http://cnd.jsdelivr.net/momentjs/latest/moment.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.js"></script>
            <div className="card" style={{'width':'300px', 'alignContent':'center'}}>
              <div className="card-header">
                <h3 className="card-title">Login</h3>
                <div className="card-body">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="email" placeholder="Enter UserName" />
                    <Form.Text className="text-muted">
                       No comparta su usuario y contraseña con nadie.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
