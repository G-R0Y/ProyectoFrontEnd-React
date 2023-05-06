import React from 'react'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TablaIMC = (data) => {


    const flecha = 50*data.valor.imc - 35 
    return (

        <div className="col-md-5 col-10 mb-5 text-center position-relative table-imc">
            <div className="resultado" style={{ top: flecha, display: data.valor.display}}>
                <FontAwesomeIcon icon={faLongArrowAltRight} color='rgb(255, 38, 0)' />
            </div>
            <div className="d-flex justify-content-center">
                <table width="100%" border="1" className="texto_tabla">
                    <tbody bgcolor="#e8e8e8" style={{color:"#1e1e1e"}} width="50%" height="50">
                        <tr>
                            <td width="50%" height="50"><strong>IMC</strong></td>
                            <td width="50%" height="50"><strong>ESTADO</strong></td>
                        </tr>
                        <tr border="1">
                            <td width="50%" height="50">Por debajo de 18.5</td>
                            <td width="50%" height="50">Bajo peso</td>
                        </tr>
                        <tr >
                            <td width="50%" height="50" >18,5 – 24,9</td>
                            <td width="50%" height="50">Peso normal</td>
                        </tr>
                        <tr>
                            <td width="50%" height="50">25.0 – 29.9</td>
                            <td width="50%" height="50">Pre-obesidad o Sobrepeso</td>
                        </tr>
                        <tr>
                            <td width="50%" height="50">30.0 – 34.9</td>
                            <td width="50%" height="50">Obesidad clase I</td>
                        </tr>
                        <tr>
                            <td width="50%" height="50">35,0 – 39,9</td>
                            <td width="50%" height="50">Obesidad clase II</td>
                        </tr>
                        <tr>
                            <td width="50%" height="50">Por encima de 40</td>
                            <td width="50%" height="50">Obesidad clase III</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className='fuente'>Fuente: <a
                href="https://www.euro.who.int/en/health-topics/disease-prevention/nutrition/a-healthy-lifestyle/body-mass-index-bmi">Organizacion
                Mundial de la Salud </a>
                (2023)</p>
        </div>

    )
}

// const posFlecha = (350 / 7) * flecha - 25 + "px";
// resultado.style.top = posFlecha;
// resultado.style.display = "block";
// resultadoIMC.innerText = `Tu IMC es de ${IMC.toFixed(1)}`;

export default TablaIMC