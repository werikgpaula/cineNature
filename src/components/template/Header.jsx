import './Header.css'
import React from 'react'

export default props =>
(
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt3">
        	{props.title}
        	<span className='buscar'>
	        	<input className='buscar' type="text" id="txtBusca" placeholder="Procurar Filme..."/>
	        	<button  className='bttbuscar' id="btnBusca">Buscar</button>
        	</span>
        </h1>
    </header>
)