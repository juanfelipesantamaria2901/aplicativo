import * as React from 'react';
import { useState } from 'react';
import {
    Button, Nav, 
} from 'react-bootstrap';
import Inpunt from '../Inputs/Input';
import { Select, Label } from '../Inputs/styles';

// API back-end
const API = process.env.REACT_APP_API;

//Componente Modal
const Modal = () => {

    //Mehotd for sent data to API
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://192.168.0.19:3001/api/Cartera`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                IdSede,
                IdTurno,
                CodigoIsla,
                Vendedor,
                IdentificacionCliente,
                NombreCliente,
                IdDocumento,
                Articulo,
                VolumenVenta,
                ValorUnitario,
                ValorVenta,
                Placa,
                FormasPago,
                CodigoCara,
                CodigoManguera,
                PrefijoFactura,
                NumeroFactura,
                FechaZeta,
                Fecha,
                Hora,
                Rom,
                Kilometraje,
                Cuenta
            }),
        });
        const data = await res.json();
        console.log(data);
        if (data != null) {
            window.alert("¡Informacion Guardada exitosamente!");
        }else{
            window.alert("¡Error al guardar la informacion!");
        }
    }

    //Values of the form to be sent to the API
    const [IdSede2, cambiarIdSede] = useState({ campo: '' });
    const IdSede = IdSede2.campo
    const [SetIdSede] = useState("")
    const [IdTurno2, cambiarIdTurno] = useState({ campo: '' });
    const IdTurno = IdTurno2.campo
    const [SetIdTurno] = useState("")
    const [CodigoIsla2, cambiarCodigoIsla] = useState({ campo: '' });
    const CodigoIsla = CodigoIsla2.campo
    const [SetCodigoIsla] = useState("")
    const [Vendedor2, cambiarVendedor] = useState({ campo: '' });
    const Vendedor = Vendedor2.campo
    const [SetVendedor] = useState("")
    const [IdentificacionCliente2, cambiarIdentificacionCliente] = useState({ campo: '' });
    const IdentificacionCliente = IdentificacionCliente2.campo
    const [SetIdentificacionCliente] = useState("")
    const [NombreCliente2, cambiarNombreCliente] = useState({ campo: '' });
    const NombreCliente = NombreCliente2.campo
    const [SetNombreCliente] = useState("")
    const [IdDocumento2, cambiarIdDocumento] = useState({ campo: '' });
    const IdDocumento = IdDocumento2.campo
    const [SetIdDocumento] = useState("")
    const [Articulo2, cambiarArticulo] = useState({ campo: '' });
    const Articulo = Articulo2.campo
    const [SetArticulo] = useState("")
    const [VolumenVenta2, cambiarVolumenVenta] = useState({ campo: '' });
    const VolumenVenta = VolumenVenta2.campo
    const [SetVolumenVenta] = useState("")
    const [ValorUnitario2, cambiarValorUnitario] = useState({ campo: '' });
    const ValorUnitario = ValorUnitario2.campo
    const [SetValorUnitario] = useState("")
    const [ValorVenta2, cambiarValorVenta] = useState({ campo: '' });
    const ValorVenta = ValorVenta2.campo
    const [SetValorVenta] = useState("")
    const [Placa2, cambiarPlaca] = useState({ campo: '' });
    const Placa = Placa2.campo
    const [SetPlaca] = useState("")
    const [FormasPago, cambiarFormasPago] = useState("")
    const [CodigoCara2, cambiarCodigoCara] = useState({ campo: '' });
    const CodigoCara = CodigoCara2.campo
    const [SetCodigoCara] = useState("")
    const [CodigoManguera2, cambiarCodigoManguera] = useState({ campo: '' });
    const CodigoManguera = CodigoManguera2.campo
    const [SetCodigoManguera] = useState("")
    const [PrefijoFactura2, cambiarPrefijoFactura] = useState({ campo: '' });
    const PrefijoFactura = PrefijoFactura2.campo
    const [SetPrefijoFactura] = useState("")
    const [NumeroFactura2, cambiarNumeroFactura] = useState({ campo: '' });
    const NumeroFactura = NumeroFactura2.campo
    const [SetNumeroFactura] = useState("")
    const [FechaZeta2, cambiarFechaZeta] = useState({ campo: '' });
    const FechaZeta = FechaZeta2.campo
    const [SetFechaZeta] = useState("")
    const [Fecha2, cambiarFecha] = useState({ campo: '' });
    const Fecha = Fecha2.campo
    const [SetFecha] = useState("")
    const [Hora2, cambiarHora] = useState({ campo: '' });
    const Hora = Hora2.campo
    const [SetHora] = useState("")
    const [Rom2, cambiarRom] = useState({ campo: '' });
    const Rom = Rom2.campo
    const [SetRom] = useState("")
    const [Kilometraje2, cambiarKilometraje] = useState({ campo: '' });
    const Kilometraje = Kilometraje2.campo
    const [SetKilometraje] = useState("")
    const [Cuenta2, cambiarCuenta] = useState({ campo: '' });
    const Cuenta = Cuenta2.campo
    const [SetCuenta] = useState("")

    //Render of the component
    return (
        <div className='content'>
            <div className="content-wrapper" style={{ "min-height": "1050px" }}>
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
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1> Registro Cartera Diario</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-md-right">
                                    <Nav.Link className="breadcrumb-item" href="/DatosCartera">Cerrar</Nav.Link>
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
                            <div className="col-md-12" style={{ "height": "950px" }}>
                                {/* general form elements disabled */}
                                <div className="card card-warning">
                                    <div className="card-header bg-warning">
                                        <h3 className="card-title"><b>Registro Cartera Diario</b></h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body ">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="form-group" >
                                                        <Inpunt
                                                            required
                                                            estado={IdSede2}
                                                            cambiarEstado={cambiarIdSede}
                                                            name="IdSede"
                                                            type="text"
                                                            label="IdSede"
                                                            placeholder="Escribe..."
                                                            id="IdSede"
                                                            value={IdSede2}
                                                            onChange={(e) => SetIdSede(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={IdTurno2}
                                                            cambiarEstado={cambiarIdTurno}
                                                            name="IdTurno"
                                                            type="text"
                                                            label="IdTurno"
                                                            placeholder="Escribe..."
                                                            id="IdTurno"
                                                            value={IdTurno2}
                                                            onChange={(e) => SetIdTurno(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={CodigoIsla2}
                                                            cambiarEstado={cambiarCodigoIsla}
                                                            name="CodigoIsla"
                                                            type="text"
                                                            label="CodigoIsla"
                                                            placeholder="Escribe..."
                                                            id="CodigoIsla"
                                                            value={CodigoIsla2}
                                                            onChange={(e) => SetCodigoIsla(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Vendedor2}
                                                            cambiarEstado={cambiarVendedor}
                                                            name="Vendedor"
                                                            type="text"
                                                            label="Vendedor"
                                                            placeholder="Escribe..."
                                                            id="Vendedor"
                                                            value={Vendedor2}
                                                            onChange={(e) => SetVendedor(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={IdentificacionCliente2}
                                                            cambiarEstado={cambiarIdentificacionCliente}
                                                            name="IdentificacionCliente"
                                                            type="text"
                                                            label="IdentificacionCliente"
                                                            placeholder="Escribe..."
                                                            id="IdentificacionCliente"
                                                            value={IdentificacionCliente2}
                                                            onChange={(e) => SetIdentificacionCliente(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={NombreCliente2}
                                                            cambiarEstado={cambiarNombreCliente}
                                                            name="NombreCliente"
                                                            type="text"
                                                            label="NombreCliente"
                                                            placeholder="Escribe..."
                                                            id="NombreCliente"
                                                            value={NombreCliente2}
                                                            onChange={(e) => SetNombreCliente(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={IdDocumento2}
                                                            cambiarEstado={cambiarIdDocumento}
                                                            name="IdDocumento"
                                                            type="text"
                                                            label="IdDocumento"
                                                            placeholder="Escribe..."
                                                            id="IdDocumento"
                                                            value={IdDocumento2}
                                                            onChange={(e) => SetIdDocumento(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Articulo2}
                                                            cambiarEstado={cambiarArticulo}
                                                            name="Articulo"
                                                            type="text"
                                                            label="Articulo"
                                                            placeholder="Escribe..."
                                                            id="Articulo"
                                                            value={Articulo2}
                                                            onChange={(e) => SetArticulo(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={VolumenVenta2}
                                                            cambiarEstado={cambiarVolumenVenta}
                                                            name="VolumenVenta"
                                                            type="text"
                                                            label="VolumenVenta"
                                                            placeholder="Escribe..."
                                                            id="VolumenVenta"
                                                            value={VolumenVenta2}
                                                            onChange={(e) => SetVolumenVenta(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={ValorUnitario2}
                                                            cambiarEstado={cambiarValorUnitario}
                                                            name="ValorUnitario"
                                                            type="text"
                                                            label="ValorUnitario"
                                                            placeholder="Escribe..."
                                                            id="ValorUnitario"
                                                            value={ValorUnitario2}
                                                            onChange={(e) => SetValorUnitario(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={ValorVenta2}
                                                            cambiarEstado={cambiarValorVenta}
                                                            name="ValorVenta"
                                                            type="text"
                                                            label="ValorVenta"
                                                            placeholder="Escribe..."
                                                            id="ValorVenta"
                                                            value={ValorVenta2}
                                                            onChange={(e) => SetValorVenta(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ "border-radius": "5px" }}>
                                                <div className="card-header bg-warning" />
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Placa2}
                                                            cambiarEstado={cambiarPlaca}
                                                            name="Placa"
                                                            type="text"
                                                            label="Placa"
                                                            placeholder="Escribe..."
                                                            id="Placa"
                                                            value={Placa2}
                                                            onChange={(e) => SetPlaca(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Label className="Select-FormasPago">Forma de Pago</Label>
                                                        <Select name="FormasPago" id="FormasPago"
                                                            Classname="form-select"
                                                            showSearch
                                                            value={FormasPago}
                                                            onChange={(e) => cambiarFormasPago(e.target.value)}
                                                            required>
                                                            <option selected>Seleccione una opcion</option>
                                                            <option value="Credito" >Credito</option>
                                                            <option value="Efectivo" >Efectivo</option>
                                                            <option value="Otros" >Otros</option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={CodigoCara2}
                                                            cambiarEstado={cambiarCodigoCara}
                                                            name="CodigoCara"
                                                            type="text"
                                                            label="CodigoCara"
                                                            placeholder="Escribe..."
                                                            id="CodigoCara"
                                                            value={CodigoCara2}
                                                            onChange={(e) => SetCodigoCara(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={CodigoManguera2}
                                                            cambiarEstado={cambiarCodigoManguera}
                                                            name="CodigoManguera"
                                                            type="text"
                                                            label="CodigoManguera"
                                                            placeholder="Escribe..."
                                                            id="CodigoManguera"
                                                            value={CodigoManguera2}
                                                            onChange={(e) => SetCodigoManguera(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={PrefijoFactura2}
                                                            cambiarEstado={cambiarPrefijoFactura}
                                                            name="PrefijoFactura"
                                                            type="text"
                                                            label="PrefijoFactura"
                                                            placeholder="Escribe..."
                                                            id="PrefijoFactura"
                                                            value={PrefijoFactura2}
                                                            onChange={(e) => SetPrefijoFactura(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={NumeroFactura2}
                                                            cambiarEstado={cambiarNumeroFactura}
                                                            name="NumeroFactura"
                                                            type="text"
                                                            label="NumeroFactura"
                                                            placeholder="Escribe..."
                                                            id="NumeroFactura"
                                                            value={NumeroFactura2}
                                                            onChange={(e) => SetNumeroFactura(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ "border-radius": "5px" }}>
                                                <div className="card-header bg-warning" />
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={FechaZeta2}
                                                            cambiarEstado={cambiarFechaZeta}
                                                            name="FechaZeta"
                                                            type="text"
                                                            label="FechaZeta"
                                                            placeholder="2022-03-15"
                                                            id="FechaZeta"
                                                            value={FechaZeta2}
                                                            onChange={(e) => SetFechaZeta(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Fecha2}
                                                            cambiarEstado={cambiarFecha}
                                                            name="Fecha"
                                                            type="text"
                                                            label="Fecha"
                                                            placeholder="2022-03-15"
                                                            id="Fecha"
                                                            value={Fecha2}
                                                            onChange={(e) => SetFecha(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Hora2}
                                                            cambiarEstado={cambiarHora}
                                                            name="Hora"
                                                            type="text"
                                                            label="Hora"
                                                            placeholder="12:00:00"
                                                            id="Hora"
                                                            value={Hora2}
                                                            onChange={(e) => SetHora(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Rom2}
                                                            cambiarEstado={cambiarRom}
                                                            name="Rom"
                                                            type="text"
                                                            label="Rom"
                                                            placeholder="Escribe..."
                                                            id="Rom"
                                                            value={Rom2}
                                                            onChange={(e) => SetRom(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Kilometraje2}
                                                            cambiarEstado={cambiarKilometraje}
                                                            name="Kilometraje"
                                                            type="text"
                                                            label="Kilometraje"
                                                            placeholder="Escribe..."
                                                            id="Kilometraje"
                                                            value={Kilometraje2}
                                                            onChange={(e) => SetKilometraje(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Cuenta2}
                                                            cambiarEstado={cambiarCuenta}
                                                            name="Cuenta"
                                                            type="text"
                                                            label="Cuenta"
                                                            placeholder="Escribe..."
                                                            id="Cuenta"
                                                            value={Cuenta2}
                                                            onChange={(e) => SetCuenta(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <Button variant='warning' style={{ 'color': 'black' }} type="submit" ><b>Agregar</b></Button>
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
                </section>
            </div>
        </div>
    );
};
export default Modal;