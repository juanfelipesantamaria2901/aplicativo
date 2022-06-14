import { React, ReactDOM} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

const Cartera2 = () => {
    const element = (
        <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous" />
  {/* Font Awesome */}
  <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css" />
  {/* fullCalendar */}
  <link rel="stylesheet" href="../plugins/fullcalendar/main.css" />
  {/* Theme style */}
  <link rel="stylesheet" href="../dist/css/adminlte.min.css" />
  <title>Cuadre Diario Cartera</title>
  {/* Theme style */}
  <link rel="stylesheet" href="../dist/css/adminlte.min.css" />
  {/* Font Awesome */}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
  {/* MDB */}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css" rel="stylesheet" />
  {/* DataTables */}
  <link rel="stylesheet" href="./../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css" />
  <link rel="stylesheet" href="./../plugins/datatables-responsive/css/responsive.bootstrap4.min.css" />
  <link rel="stylesheet" href="./../plugins/datatables-buttons/css/buttons.bootstrap4.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\n        .modalDialog {\n            position: fixed;\n            font-family: Arial, Helvetica, sans-serif;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            background: rgba(0, 0, 0, 0.8);\n            z-index: 99999;\n            opacity: 0;\n            -webkit-transition: opacity 400ms ease-in;\n            -moz-transition: opacity 400ms ease-in;\n            transition: opacity 400ms ease-in;\n            pointer-events: none;\n            overflow-y: scroll !important\n        }\n\n        .modalDialog:target {\n            opacity: 1;\n            pointer-events: auto;\n        }\n\n        .modalDialog>div {\n            height: 100%;\n            overflow: auto;\n            width: 70%;\n            margin: 10px;\n            border-radius: 10px;\n            background: #fff;\n            background: -moz-linear-gradient(#fff, #999);\n            background: -webkit-linear-gradient(#fff, #999);\n            background: -o-linear-gradient(#fff, #999);\n            -webkit-transition: opacity 400ms ease-in;\n            -moz-transition: opacity 400ms ease-in;\n            transition: opacity 400ms ease-in;\n            overflow-y: auto;\n        }\n\n        .close {\n            background: #606061;\n            color: #FFFFFF;\n            line-height: 25px;\n            position: absolute;\n            right: -12px;\n            text-align: center;\n            top: -10px;\n            width: 24px;\n            text-decoration: none;\n            font-weight: bold;\n            -webkit-border-radius: 12px;\n            -moz-border-radius: 12px;\n            border-radius: 12px;\n            -moz-box-shadow: 1px 1px 3px #000;\n            -webkit-box-shadow: 1px 1px 3px #000;\n            box-shadow: 1px 1px 3px #000;\n        }\n\n        .close:hover {\n            background: #00d9ff;\n        }\n    " }} />
  <style dangerouslySetInnerHTML={{__html: "\n        .modalDialog2 {\n            position: fixed;\n            font-family: Arial, Helvetica, sans-serif;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            background: rgba(0, 0, 0, 0.8);\n            z-index: 99999;\n            opacity: 0;\n            -webkit-transition: opacity 400ms ease-in;\n            -moz-transition: opacity 400ms ease-in;\n            transition: opacity 400ms ease-in;\n            pointer-events: none;\n            overflow-y: initial !important\n        }\n\n        .modalDialog2:target {\n            opacity: 1;\n            pointer-events: auto;\n        }\n\n        .modalDialog2>div {\n            height: 75%;\n            overflow: auto;\n            width: 95%;\n            margin: 10px;\n            border-radius: 10px;\n            background: #fff;\n            background: -moz-linear-gradient(#fff, #999);\n            background: -webkit-linear-gradient(#fff, #999);\n            background: -o-linear-gradient(#fff, #999);\n            -webkit-transition: opacity 400ms ease-in;\n            -moz-transition: opacity 400ms ease-in;\n            transition: opacity 400ms ease-in;\n        }\n\n        .close {\n            background: #606061;\n            color: #FFFFFF;\n            line-height: 25px;\n            position: absolute;\n            right: -12px;\n            text-align: center;\n            top: -10px;\n            width: 24px;\n            text-decoration: none;\n            font-weight: bold;\n            -webkit-border-radius: 12px;\n            -moz-border-radius: 12px;\n            border-radius: 12px;\n            -moz-box-shadow: 1px 1px 3px #000;\n            -webkit-box-shadow: 1px 1px 3px #000;\n            box-shadow: 1px 1px 3px #000;\n        }\n\n        .close:hover {\n            background: #00d9ff;\n        }\n    " }} />
  <nav className="navbar navbar-expand-lg navbar-light bg-gradient-secondary">
    <div className="container-fluid">
      <a className="navbar-brand" href="Caja.html"><strong><i className="icon fa fa-eye" /> Aplicativo
          Rivera</strong></a>
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="index.html"><b>Dashboard</b></a>
          </li>
          {/* Dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <b>Cartera</b>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li className="nav-item">
                <a className="nav-link active" href="CuadreCartera.html"><b>Cartera</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="TablaRelacional.html"><b>Tabla Relacional</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="VistaPlano.html"><b>Vista Plano</b></a>
              </li>
            </ul>
          </li>
          {/* Dropdown */}
          <li className="nav-item">
            <a className="nav-link" href="Inventario.html"><b>Control Mecanicos Inventario</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Caja.html"><b>Ingreso</b></a>
          </li>
        </ul>
        <form className="d-flex input-group w-auto">
          <input type="search" className="form-control" placeholder="Buscar" aria-label="Search" />
          <button className="btn bg-gradient-orange" type="button" data-mdb-ripple-color="dark">
            <b>Buscar</b>
          </button>
        </form>
      </div>
      {/* Right elements */}
      <div className="d-flex align-items-center" style={{"margin":"5px"}} id="ocultar">
        {/* Notifications */}
        <div className="dropdown" style={{"margin":"5px"}}>
          <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-bell" />
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">Ultimos cambios</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Nuevos registros</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Otros</a>
            </li>
          </ul>
        </div>
        {/* Avatar */}
        <div className="dropdown" style={{"margin":"5px"}}>
          <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
            <li>
              <a className="dropdown-item" href="#">Mi perfil</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Configuracion</a>
            </li>
            <li>
              <a className="dropdown-item" href="Login.html">Cerrar sesion</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right elements */}
    </div>
  </nav>
  <div className="content">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Cuadre De Cartera</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="Caja.html">Regresar</a></li>
              <li className="breadcrumb-item active">Cuadre Diario Cartera</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    <div className="row">
      <div className="col-sm-3" style={{"margin":"10px"}}>
        <a type="button" className="btn bg-gradient-orange" href="#openModal4"><b>Adicionar</b></a>
        <a className="btn bg-gradient-orange" data-mdb-toggle="modal" data-mdb-target="#exampleModal"><b>Confirmacion</b></a>
      </div>
    </div>
    <div className="content" style={{"margin":"15px"}}>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <div className="col">
          <div className="toast show fade text-white bg-dark" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-color="info" data-mdb-autohide="false">
            <div className="toast-header text-white bg-dark">
              <i className="fas fa-info-circle fa-lg me-2" />
              <strong className="me-auto">Numero de transacciones:</strong>
              <small>Hace 11 min</small>
              <button type="button" className="btn-close btn-close-white" data-mdb-dismiss="toast" aria-label="Close" />
            </div>
            <div className="toast-body"><strong className="me-auto">12</strong> </div>
          </div>
        </div>
        <div className="col">
          <div className="toast show fade text-white bg-dark" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-color="info" data-mdb-autohide="false">
            <div className="toast-header text-white bg-dark">
              <i className="fas fa-info-circle fa-lg me-2" />
              <strong className="me-auto">Total Volumen Ventas:</strong>
              <small>Hace 11 min</small>
              <button type="button" className="btn-close btn-close-white" data-mdb-dismiss="toast" aria-label="Close" />
            </div>
            <div className="toast-body"> <strong className="me-auto">157.179</strong></div>
          </div>
        </div>
        <div className="col">
          <div className="toast show fade text-white bg-dark" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-color="info" data-mdb-autohide="false">
            <div className="toast-header text-white bg-dark" >
              <i className="fas fa-info-circle fa-lg me-2" />
              <strong className="me-auto">Total Valor de Ventas:</strong>
              <small>Hace 11 min</small>
              <button type="button" className="btn-close btn-close-white" data-mdb-dismiss="toast" aria-label="Close" />
            </div>
            <div className="toast-body">  <strong className="me-auto">1'845.812</strong></div>
          </div>
        </div>
      </div>
    </div>
    <div id="Mantenimietnos" className="content " style={{"margin":"5px"}}>
      <div className="card" style={{"width":"100%"}}>
        <div className="card-header bg-gradient-orange">
          <h3 className="card-title"><b>CUADRE DIARIO CARTERA</b></h3>
        </div>
        {/* ./card-header */}
        <div className="card-body bg-dark">
          <table id="example1" className="table table-dark table-striped table-hover table-bordered table-md table-responsive-md" style={{"border-radius":"5px"}}>
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
                <th colSpan={1}>Volumen<br /><small style={{}}>Total:157.179</small></th>
                <th colSpan={1}>PPU<br /><small style={{}}>Total:12</small></th>
                <th colSpan={1}>Valor<br /><small style={{}}>Total:1'845.812</small></th>
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
                <td>13,184<br /><small style={{}}>Subtotal:13.184</small></td>
                <td>9350<br /><small style={{}}>#1</small></td>
                <td>123270<br /><small style={{}}>Subtotal:123270</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/04/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo">
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
                <td>9,497<br /><small style={{}}>Subtotal:9.497</small></td>
                <td>9460<br /><small style={{}}>#2</small></td>
                <td>89842<br /><small style={{}}>Subtotal:89842</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo2">
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
                <td>13,184<br /><small style={{}}>Subtotal:22.681</small></td>
                <td>9350<br /><small style={{}}>#3</small></td>
                <td>123270<br /><small style={{}}>Subtotal:213112</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo3">
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
                <td>13,184<br /><small style={{}}>Subtotal:13.184</small></td>
                <td>9350<br /><small style={{}}>#4</small></td>
                <td>123270<br /><small style={{}}>Subtotal:123270</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo4">
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
                <td>13.184<br /><small style={{}}>Subtotal:35.865</small></td>
                <td>9350<br /><small style={{}}>#5</small></td>
                <td>123270<br /><small style={{}}>Subtotal:336382</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo5">
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
                <td>15,842<br /><small style={{}}>Subtotal:15.842</small></td>
                <td>9793<br /><small style={{}}>#6</small></td>
                <td>523270<br /><small style={{}}>Subtotal:523270</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo6">
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
                <td>13,184<br /><small style={{}}>Subtotal:49.049</small></td>
                <td>9350<br /><small style={{}}>#7</small></td>
                <td>123270<br /><small style={{}}>Subtotal:459652</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo7">
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
                <td>13,184<br /><small style={{}}>Subtotal:62.233</small></td>
                <td>9350<br /><small style={{}}>#8</small></td>
                <td>123270<br /><small style={{}}>Subtotal:582922</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo8">
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
                <td>13,184<br /><small style={{}}>Subtotal:75.417</small></td>
                <td>9350<br /><small style={{}}>#9</small></td>
                <td>123270<br /><small style={{}}>Subtotal:123270</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo9">
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
                <td>13,184<br /><small style={{}}>Subtotal:88.601</small></td>
                <td>9350<br /><small style={{}}>#10</small></td>
                <td>123270<br /><small style={{}}>Subtotal:706192</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo10">
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
                <td>13,184<br /><small style={{}}>Subtotal:101.785</small></td>
                <td>9350<br /><small style={{}}>#11</small></td>
                <td>123270<br /><small style={{}}>Subtotal:829462</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo11">
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
                <td>13,184<br /><small style={{}}>Subtotal:114.969</small></td>
                <td>9350<br /><small style={{}}>#12</small></td>
                <td>123270<br /><small style={{}}>Subtotal:952732</small></td>
                <td>TMP692</td>
                <td>Credito Directo</td>
                <td>15/03/2022</td>
                <td className="project-actions text-right">
                  <a className="btn bg-gradient-orange btn-sm" href="#MasInfo12">
                    <i className="fas fa-folder">
                    </i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
        <div id="MasInfo" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo2" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo3" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo4" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo6" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>6</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo5" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo7" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo8" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo9" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo10" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo11" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        <div id="MasInfo12" className="modalDialog2">
          <div className="card" style={{"margin":"15px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">Mas Informacion</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <div className="card-header bg-gradient-orange">
            </div>
            {/* ./card-header */}
            <div className="card-body bg-dark">
              <table id="example2" className="table table-dark table-striped table-hover table-bordered table-sm table-responsive-sm">
                <thead>
                  <tr>
                  </tr><tr>
                    <th colSpan={1}>Vendedor</th>
                    <th>Codigo Cara</th>
                    <th>Codigo Manguera</th>
                    <th>Prefijo Factura</th>
                    <th>Numero Factura</th>
                    <th>Fecha Zeta</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Rom</th>
                    <th>Kilometraje</th>
                    <th>Cuenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>5</td>
                    <td />
                    <td>0</td>
                    <td>15/03/2022</td>
                    <td>15/03/2022</td>
                    <td>10:45:04</td>
                    <td>700A0D0043634B01</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Confirmacion</h5>
                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">Esta seguro que quiere confirmar el cuadre de caja?</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primary" onclick="Alerta()" data-mdb-dismiss="modal">Confirmar</button>
              </div>
            </div>
          </div>
        </div>
        <div id="openModal4" className="modalDialog">
          <div className="content-wrapper" style={{"min-height":"1050px"}}>
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1> REGISTRO CARTERA DIARIO</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right bg-transparent">
                      <li className="breadcrumb-item"><a href="#">Cerrar</a></li>
                      <li className="breadcrumb-item active">CARTERA DIARIO</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  {/* left column */}
                  <div className="col-md-12" style={{"height":"950px"}}>
                    {/* general form elements disabled */}
                    <div className="card card-warning">
                      <div className="card-header bg-gradient-orange">
                        <h3 className="card-title"><b> REGISTRO CARTERA DIARIO</b></h3>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body ">
                        <form>
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>IdSede </label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>IdTurno </label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>CodigoIsla*</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>Vendedor</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>IdentificacionCliente</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>NombreCliente</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>IdDocumento</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>Articulo</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>VolumenVenta</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>ValorUnitario</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>ValorVenta</label>
                                <input type="text" className="form-control" placeholder="Escribe ..." />
                              </div>
                            </div>
                          </div>
                          <div className="row" style={{"border-radius":"5px"}}>
                            <div className="card-header bg-gradient-orange " />
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>Placa</label>
                                <input type="text" className="form-control" placeholder="Escribe..." />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>FormasPago</label>
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Selecciona</option>
                                  <option value={1}>Credito Directo</option>
                                  <option value={2}>Efectivo</option>
                                  <option value={3}>Otros</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>CodigoCara</label>
                                <input type="text" className="form-control" placeholder="Escribe..." />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>CodigoManguera</label>
                                <input type="text" className="form-control" placeholder="Escribe..." />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>PrefijoFactura</label>
                                <input type="text" className="form-control" placeholder="Escribe..." />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>NumeroFactura</label>
                                <input type="text" className="form-control" placeholder="Escribe..." />
                              </div>
                            </div>
                          </div>
                          <div className="row" style={{"border-radius":"5px"}}>
                            <div className="card-header bg-gradient-orange " />
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>FechaZeta</label>
                                <div className="input-group date" id="datefilter" data-target-input="nearest">
                                  <input type="text" className="form-control datetimepicker-input" data-target="#datefilter" />
                                  <div className="input-group-append" data-target="#datefilter" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar" /></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>Fecha</label>
                                <div className="input-group date" id="datefilter" data-target-input="nearest">
                                  <input type="text" className="form-control datetimepicker-input" data-target="#datefilter" />
                                  <div className="input-group-append" data-target="#datefilter" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar" /></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>Hora</label>
                                <div className="input-group date" id="datefilter" data-target-input="nearest">
                                  <input type="text" className="form-control datetimepicker-input" data-target="#datefilter" />
                                  <div className="input-group-append" data-target="#datefilter" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar" /></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>Rom</label>
                                <input type="text" className="form-control" placeholder="Escribe..." />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>Kilometraje</label>
                                <input type="text" className="form-control" placeholder="Escribe..." />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label>Cuenta</label>
                                <input type="text" className="form-control" placeholder="Escribe..." />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <button type="submit" className="btn bg-gradient-orange float-right"><b>Agregar</b></button>
                          </div>
                        </form></div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.card */}
              </div>
              {/*/.col */}
            </section></div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
        {/* /.content */}
      </div>
      {/* Optional JavaScript */}
      {/* jQuery first, then Popper.js, then Bootstrap JS */}
      {/* AdminLTE App */}
      {/* FLOT CHARTS */}
      {/* FLOT RESIZE PLUGIN - allows the chart to redraw when the window is resized */}
      {/* FLOT PIE PLUGIN - also used to draw donut charts */}
      {/* AdminLTE for demo purposes */}
      {/* Bootstrap Switch */}
      {/* InputMask */}
      {/* jQuery */}
      {/* Bootstrap 4 */}
      {/* AdminLTE App */}
      {/* FLOT CHARTS */}
      {/* FLOT RESIZE PLUGIN - allows the chart to redraw when the window is resized */}
      {/* FLOT PIE PLUGIN - also used to draw donut charts */}
      {/* Bootstrap 4 */}
      {/* Select2 */}
      {/* Bootstrap4 Duallistbox */}
      {/* InputMask */}
      {/* date-range-picker */}
      {/* bootstrap color picker */}
      {/* Tempusdominus Bootstrap 4 */}
      {/* Bootstrap Switch */}
      {/* BS-Stepper */}
      {/* dropzonejs */}
      {/* AdminLTE for demo purposes */}
      {/* Page specific script */}
      {/* AdminLTE App */}
      {/* AdminLTE for demo purposes */}
      {/* DataTables  & Plugins */}
      {/* MDB */}
    </div></div></div>
    );
   root.render(element);

}

export default Cartera2;