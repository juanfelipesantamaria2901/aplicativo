import React from "react";
import './Login.css';
import ReactRedirect from 'react-router-dom';
// import  { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import {
    Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, NavLink, Container, Offcanvas, FormControl, Form,
    Card, CardGroup, CardDeck, CardColumns, CardBody, CardHeader, CardFooter, Table, DatePicker,
} from 'react-bootstrap';
import { Fondo } from '../../images/TERRALUZ_GRUPOMARTI_004.jpg';
import axios from 'axios';
import md5 from 'md5';
import cookie from 'cookie';

//const valit =() =>{
  //  if(this.state.Form.username ==="Admin" && this.state.Form.password ==="123"){
    //          <ReactRedirect location='www.driftt.com'>
 //     </ReactRedirect>
   // }
   // else{
    //    window.alert("Usuario o contraseña incorrectos");
   // }  href={'/Cartera'}

   let USER=  process.env.APPUSER;
   let PASS=  process.env.APPPASS;

class Login extends React.Component {
    
    state = {
        Form: {
            username: '',
            password: '',
        }
    }

    handleChange = async e => {
        await this.setState({
            Form: {
                ...this.state.Form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.Form);
    }
 
 inicio(){
        if(this.state.Form.username === "Admin" && this.state.Form.password === "Admin"){
            window.alert(`Bienvenido ${this.state.Form.username}`);
            window.location.assign('http://127.0.0.1:3000/Cartera')
        }else
        {
        window.alert("Usuario o contraseña incorrectos");
        window.location.assign('http://127.0.0.1:3000/');
        }
    }

    iniciarsecion = async () => {
//        valit();
 //       await axios.get('http://192.168.0.19:3001/api/login', { params: { username: this.state.Form.username, password: md5(this.state.Form.password) } })
//            .then(res => {
 //               console.log(res.data);
  //          })
  //          .then(res => {
  //              if (res.data.length > 0) {
  //                  cookie.set('username', res.username, { path: '/' });
 //                   cookie.set('id', res.id, { path: '/' });
//                    cookie.set('nombre', res.nombre, { path: '/' });
  //                  cookie.set('apellido', res.apellido, { path: '/' });
//                    window.alert(`Bienvenido ${res.nombre} ${res.apellido}`);
//    }else{
//      window.alert("Usuario o contraseña incorrectos");
   //     window.location.assign('http://127.0.0.1:3000/');
//    }
//})
  //          .catch(err => {
  //              console.log(err);
  //          })
  }

    render() {
        return (
            <div className="content">
                <div id="Login" className="container" style={{'  background-colo':'orange'}}>
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
                    <div className="card" style={ {'width': '300px', 'alignContent': 'center','margin-top':'15px'}}>
                        <div className="card-header bg-warning">
                            <h3 className="card-title">Login</h3>
                            </div>
                            <div className="card-body">
                                <Form >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>UserName</Form.Label>
                                        <Form.Control type="user" placeholder="Enter UserName" name="username" onChange={this.handleChange} />
                                        <Form.Text className="text-muted">
                                            No comparta su usuario y contraseña con nadie.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Button variant="warning" type="submit" onClick={()=>this.inicio()} href={'/Cartera'}  style={{'color':'black'}}>
                                        Ingresar
                                    </Button>
                                </Form>
                            </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Login;
