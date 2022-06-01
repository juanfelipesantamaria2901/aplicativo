import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Tabla } from '../../Components/Tablas/Tabla';
import {
    Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, NavLink, Container, Offcanvas, FormControl, Form,
    Card, CardGroup, CardDeck, CardColumns, CardBody, CardHeader, CardFooter, Table,
} from 'react-bootstrap';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBDataTableV5
} from "mdbreact";


const Cartera = () => {
    return (
        <div>
            <header>
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

                {['sm'].map((expand) => (
                    <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#"><i class="icon fa fa-eye"></i><b>Aplicativo Rivera</b></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Aplicativo Rivera
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="/Dashboard"  >Dashboard</Nav.Link>
                                        <NavDropdown
                                            title="Cartera"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                            <li>
                                                <NavDropdown.Item href="/Cartera" active>Cartera</NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item href="/Tabla">
                                                    Tabla Relacional
                                                </NavDropdown.Item>
                                            </li>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/Vista">
                                                Vista Plano
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="/Inventario">Control Mecanicos Inventario</Nav.Link>
                                        <Nav.Link href="/Ingreso">Ingreso</Nav.Link>
                                    </Nav>
                                    <Nav
                                        class=" dropdown-toggle d-flex align-items-center hidden-arrow"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="fas fa-bell"></i>
                                        <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                        <NavDropdown
                                            class="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdownMenuAvatar">
                                            <li>
                                                <NavDropdown.Item class="dropdown-item" href="#">Notificaciones</NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item class="dropdown-item" href="#">Actualizaciones</NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item class="dropdown-item" href="#">Sobre</NavDropdown.Item>
                                            </li>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav
                                        class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                        href="#"
                                        id="navbarDropdownMenuAvatar"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                            class="rounded-circle"
                                            height="25"
                                            alt="Black and White Portrait of a Man"
                                            loading="lazy"
                                        />
                                    </Nav>
                                    <NavDropdown
                                        class="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdownMenuAvatar">
                                        <li>
                                            <NavDropdown.Item class="dropdown-item" href="#">Perfil</NavDropdown.Item>
                                        </li>
                                        <li>
                                            <NavDropdown.Item class="dropdown-item" href="#">Configuracion</NavDropdown.Item>
                                        </li>
                                        <li>
                                            <NavDropdown.Item class="dropdown-item" href="#">Salir</NavDropdown.Item>
                                        </li>
                                    </NavDropdown>
                                    <Form className="d-flex">
                                        <FormControl
                                            type="search"
                                            placeholder="Buscar"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant='warning' style={{ 'color': 'black' }}>Buscar</Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </header>
            <div className="content">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h3>Cartera</h3>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item active">Cartera</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row">
                </div>
                <Card style={{ "width": "100%", "border-radius": "5px", 'height': '80%', 'margin': '5px'  , ' background-color':'#212121'}}>
                    <div className="bg-warning">
                        <Card.Title style={{ 'margin': '5px', 'border-radius': '6px 6px 6px 6px;' }} ><b>Cuadre Diario Cartera</b></Card.Title>
                    </div>
                    <div style={{'border-radiusr':'5px', ' background-color':'#212121'}}>
                        <Table striped bordered hover responsive size="sm" variant="dark" style={{ "margin": "0px", 'width': '85%', 'border-radius': '6px 6px 6px 6px;' }}>
                            <thead>
                                <tr>
                                </tr><tr>
                                    <th colSpan={1}>Sede</th>
                                    <th colSpan={1}>Turno</th>
                                    <th colSpan={1}>Isla*</th>
                                    <th colSpan={1}>Identificacion Cliente</th>
                                    <th colSpan={1}>Nombre Cliente</th>
                                    <th colSpan={1}>Id Doc</th>
                                    <th colSpan={1}>Articulo</th>
                                    <th colSpan={1}>Volumen<br /><br /><small style={{ 'color': 'orange' }}>Total:157.179</small></th>
                                    <th colSpan={1}>PPU<br /><br /><small style={{ 'color': 'orange' }}>Total:12</small></th>
                                    <th colSpan={1}>Valor<br /><br /><small style={{ 'color': 'orange' }}>Total:1'845.812</small></th>
                                    <th colSpan={1}>Placa</th>
                                    <th colSpan={1}>Forma Pago</th>
                                    <th colSpan={1}>Fecha</th>
                                    <th colSpan={1}>Ver mas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1982</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:13.184</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#1</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:123270</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/04/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1980</td>
                                    <td>2</td>
                                    <td>805000253</td>
                                    <td>GLOBOLLANTAS LTDA</td>
                                    <td>447860</td>
                                    <td>GASOLINA CORRIENTE</td>
                                    <td>9,497<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:9.497</small></td>
                                    <td>9460<br /><br /><small style={{ 'color': 'orange' }}>#2</small></td>
                                    <td>89842<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:89842</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo2">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1980</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:22.681</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#3</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:213112</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo3">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1983</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:13.184</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#4</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:123270</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo4">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1980</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13.184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:35.865</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#5</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:336382</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo5">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1985</td>
                                    <td>3</td>
                                    <td>805361607</td>
                                    <td>JAMUNDI ASEO SA ESP</td>
                                    <td>447985</td>
                                    <td>GASOLINA CORRIENTE</td>
                                    <td>15,842<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:15.842</small></td>
                                    <td>9793<br /><br /><small style={{ 'color': 'orange' }}>#6</small></td>
                                    <td>523270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:523270</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo6">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1980</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:49.049</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#7</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:459652</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo7">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1980</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:62.233</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#8</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:582922</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo8">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1988</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:75.417</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#9</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:123270</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo9">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1980</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:88.601</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#10</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:706192</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo10">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1980</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:101.785</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#11</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:829462</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo11">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1980</td>
                                    <td>2</td>
                                    <td>900361607</td>
                                    <td>AGROPECUARIA LA TIENDA DEL HENO</td>
                                    <td>447983</td>
                                    <td>DIESEL</td>
                                    <td>13,184<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:114.969</small></td>
                                    <td>9350<br /><br /><small style={{ 'color': 'orange' }}>#12</small></td>
                                    <td>123270<br /><br /><small style={{ 'color': 'orange' }}>Subtotal:952732</small></td>
                                    <td>TMP692</td>
                                    <td>Credito Directo</td>
                                    <td>15/03/2022</td>
                                    <td className="project-actions text-right">
                                        <a className="btn bg-warning" href="#MasInfo12">
                                            <i className="fas fa-folder">
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Cartera;  
