import React from 'react'
import './Header.css'
export const Header = () => {
  return (
        <nav className='container_nav'>
            <div className='nav_izq'>
                <img src="https://img.freepik.com/vector-premium/diseno-logotipo-schnauzer-dibujado-mano_686339-46.jpg" alt="" />
            </div>
            <div className='nav_der'>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Razas de perros</a></li>
                <li><a href="#">Alimentos para perros</a></li>
            </ul>
            </div>
        </nav>
  )
}
