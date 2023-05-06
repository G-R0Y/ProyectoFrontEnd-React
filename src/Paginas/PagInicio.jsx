import React from 'react'
import ParteBeneficios from './PagInicio/ParteBeneficios'
import ParteIMC from './PagInicio/ParteIMC'
import PartePagos from './PagInicio/PartePagos'
import ParteContacto from './PagInicio/ParteContacto'

function PagInicio() {
    return (
        <>

            <ParteBeneficios />
            <PartePagos />
            <ParteIMC />
            <ParteContacto />

        </>
    )
}

export default PagInicio