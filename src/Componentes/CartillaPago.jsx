import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'


const CartillaPago = (data) => {

    const valor = { ...data.data }

    return (
        <>
            <div className="pay-title">
                <h5 className="mb-3">{valor.tipo}</h5>
                <h4 >$ {valor.precio}<span className="span">.90/mes</span></h4>
            </div>
            <div className="my-4 pay-body">
                <ul>
                    {valor.icon.map((items, i) => {
                        return (
                            <li><FontAwesomeIcon icon={valor.icon[i]} color={valor.color[i]} className='FontAwesomeIcon' />{valor.desc[i]}</li>
                        )
                    })}

                </ul>
            </div>
            <div className="d-flex justify-content-center pay-btn">
                <button className="btn btn-danger">Unete Ahora</button>
            </div>
        </>
    )
}

export default CartillaPago