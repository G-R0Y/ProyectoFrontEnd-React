

function PartePagos() {
    return (

        <div className="container">
            <div className="title2">
                <h2><br/> Choose Your Pricing Plan </h2>
            </div>
            <div className="row  justify-content-evenly mb-5">

                <div className="col-lg-3 col-sm-8 col-11 m-3 cartilla-pago Basico">
                    <div className="pay-title">
                        <h5 className="text-center mb-4">Basico</h5>
                        <h4 className="text-center">$ 59<span className="span">.90/mes</span></h4>
                    </div>
                    <div className="pay-body">
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Accede a todas las areas del
                            gimnasio</h3>
                        <h3><i className="fa-solid fa-xmark" style="color: #d72323;"></i> Acceso a sillones de masajes
                        </h3>
                        <h3><i className="fa-solid fa-xmark" style="color: #d72923;"></i> Acceso a cualquier horario sin
                            reserva</h3>
                        <h3><i className="fa-solid fa-xmark" style="color: #d72323;"></i> Acceso a todas las sedes</h3>
                        <h3><i className="fa-solid fa-xmark" style="color: #d72323;"></i> Tutor personalizado</h3>
                    </div>
                    <div className="pay-btn">
                        <button className="btn btn-danger" style="width: 100%;">Unete Ahora</button>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-8 col-11 m-3 cartilla-pago Premium">
                    <div className="pay-title">
                        <h5 className="text-center titlec mb-4">Premium</h5>
                        <h4 className="text-center">$ 99<span className="span">.90/mes</span></h4>
                    </div>
                    <div className="pay-body">
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Accede a todas las areas del
                            gimnasio</h3>
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Acceso a sillones de masajes
                        </h3>
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Acceso a cualquier horario sin
                            reserva</h3>
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Acceso a todas las sedes</h3>
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Tutor personalizado</h3>
                    </div>
                    <div className="pay-btn ">
                        <button className="btn btn-danger btn-block " style="width: 100%;">Unete Ahora</button>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-8 col-11 m-3 cartilla-pago Estandar">
                    <div className="pay-title">
                        <h5 className="text-center mb-4">Estandar</h5>
                        <h4 className="text-center
                            ">$ 79<span className="span">.90/mes</span></h4>
                    </div>
                    <div className="pay-body">
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Accede a todas las areas del
                            gimnasio</h3>
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Acceso a sillones de masajes
                        </h3>
                        <h3><i className="fa-solid fa-check" style="color: #26d723;"></i> Acceso a cualquier horario sin
                            reserva</h3>
                        <h3><i className="fa-solid fa-xmark" style="color: #d72323;"></i> Acceso a todas las sedes</h3>
                        <h3><i className="fa-solid fa-xmark" style="color: #d72323;"></i> Tutor personalizado</h3>
                    </div>
                    <div className="pay-btn">
                        <button className="btn btn-danger" style="width: 100%;">Unete Ahora</button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default PartePagos