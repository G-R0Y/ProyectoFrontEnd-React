import React from 'react'

const ContantoForm = () => {




    return (

        <>

            <div className="col-md-5 col-sm-8 col-11 mb-3 formulario">
                <form>
                    <div className="form">
                        <div className="form-group mb-2">
                            <label htmlFor="inputName">Nombre</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Nombre"/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="text-subject">Celular</label>
                            <input type="number" className="form-control" id="text-subject" placeholder="Celular"/>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="text-message-write">Escribe tu mensaje aqui</label>
                            <textarea type="text" className="form-control" id="text-message-write" rows="4"
                                cols="20" > </textarea>
                        </div>
                        <div className="text-center">

                            <button type="submit" className="btn btn-danger" id="btn-send-message">ENVIAR</button>
                        </div>

                    </div>

                </form>
            </div>



        </>
    )
}

export default ContantoForm