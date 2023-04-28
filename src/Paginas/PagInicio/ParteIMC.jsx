import { useState } from "react"
import CalcularIMC from "../../Componentes/CalcularIMC"
import TablaIMC from "../../Componentes/TablaIMC"
import swal from "sweetalert"

function ParteIMC() {

  const [valor, setValor] = useState({
    imc: 0,
    display: "none",
    valIMC: 0
  })

  const resultIMC = (datos) => {
    const valorIMC = datos.peso / ((datos.altura * datos.altura) / 10000);
    if (datos.altura <= 0 || datos.peso <= 0) {
      swal("Upps..", "Llene los campos, los valores deben de ser mayores a 0", "error");
      setValor({ imc: 0, display: "none",valIMC: 0});
    } else {
      if (valorIMC < 18.5) {
        setValor({ imc: 2, display: "block", valIMC: valorIMC });
      } else if (valorIMC >= 18.5 && valorIMC < 25) {
        setValor({ imc: 3, display: "block", valIMC: valorIMC });
      } else if (valorIMC >= 25 && valorIMC < 30) {
        setValor({ imc: 4, display: "block", valIMC: valorIMC });
      } else if (valorIMC >= 30 && valorIMC < 35) {
        setValor({ imc: 5, display: "block", valIMC: valorIMC });
      } else if (valorIMC >= 35 && valorIMC < 40) {
        setValor({ imc: 6, display: "block", valIMC: valorIMC });
      } else if (valorIMC > 40) {
        setValor({ imc: 7, display: "block", valIMC: valorIMC });
      }
    }
  };

  return (
    <div className="container-fluid ParteIMC">
      <div className="row justify-content-evenly">
        <CalcularIMC resultIMC={resultIMC} valor={valor} />
        <TablaIMC valor={valor} />
      </div>
    </div>
  )
}

export default ParteIMC