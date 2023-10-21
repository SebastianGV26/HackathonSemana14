import React from 'react'

export const Cards = ({ dog }) => {
    return (
        <div className='Card'>
            <div className='Front'>
                <header><h2 id='nombre'>{dog.name}</h2></header>
                <img src={dog.img} alt="" />
            </div>
            <div className="Back">
                <header>
                    <h2 className='back_name'>¡Hola, soy {dog.name}!</h2>
                </header>
                <div className='back_contenido'>
                    <p>Descripción: {dog.descripcion}</p>
                    <p>Soy de: {dog.pais}</p>
                    <p>Mi teléfono: {dog.telefono}</p>
                </div>
            </div>
        </div>
    )
}
