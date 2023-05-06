import React from 'react'
import Contacto from '../../Componentes/Contacto'
import ContantoForm from '../../Componentes/ContantoForm'


const ParteContacto = () => {




    return (
        <>

            <section className='ParteContacto'>
                <div className='container-fluid'>
                    <div className='row justify-content-center gap-2'>

                        <Contacto />
                        <ContantoForm />
                    </div>
                </div>
            </section>


        </>
    )
}

export default ParteContacto