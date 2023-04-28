import { useState } from "react"

const CalcularIMC = (props) => {

    const { resultIMC,valor } = props
    
    const [datos, setDatos] = useState({
        altura: 0,
        peso: 0
    })
    const calcIMC = (e) => {
        const { name, value } = e.target
        setDatos({
            ...datos,
            [name]: parseInt(value)
        })
    }

    return (

        <div className="col-md-5 col-sm-8 col-12 mb-5 ">
            <div className=" col-12 mb-4 text-md-start text-center datos-title">
                <h3><span>I</span>ndice de <span>M</span>asa <span>C</span>orporal</h3>
                <h1>¿Sabes cual es tu <span>IMC</span>?</h1>
            </div>

            <div className="row d-flex justify-content-evenly datos-body">

                <div className="col-sm-6 col-10 mb-3 datos">
                    <label className="form-label"><span>*</span>Ingrese su peso:</label>
                    <input onChange={calcIMC} name="peso" type="number" className="form-control" placeholder="Peso en Kg" />
                </div>

                <div className="col-sm-6 col-10 mb-3 datos">
                    <label className="form-label "><span>*</span>Ingrese su Altura:</label>
                    <input onChange={calcIMC} name="altura" type="number" className="form-control" placeholder="Altura en cm" />
                </div>

                <div className="col-sm-6 col-10 mb-3 datos">
                    <label className="form-label ">Ingrese su Edad:</label>
                    <input type="number" className="form-control" placeholder="Edad" />
                </div>

                <div className="col-sm-6 col-10 mb-3 datos">
                    <label className="form-label ">Selecione su Sexo:</label>
                    <select className="form-select" >
                        <option value="1">Hombre</option>
                        <option value="2">Mujer</option>
                    </select>
                </div>
            </div>

            <div className="col-12 ">
                <div className="row px-3 d-flex justify-content-sm-between justify-content-evenly align-items-center mt-2 datos-btn ">
                    <button onClick={() => resultIMC(datos)}
                        type="button" className="col-5 btn btn-danger" >Calcular IMC</button>
                    <label className="col-5 text-end resultadoIMC" style={{ display: valor.display}}>Su IMC es de {valor.valIMC.toFixed(2)}</label>
                    <p className="mt-2"><span>*</span> Datos Obigatorios</p>
                </div>
            </div>
        </div>

    )
}

export default CalcularIMC