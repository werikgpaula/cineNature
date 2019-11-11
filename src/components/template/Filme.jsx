import './Filme.css'
import React from 'react'
import { Link } from 'react-router-dom'
import naturezaSelvagem from '../../img/naturezaSelvagem.jpg'
import Capitao from '../../img/capitao.png'
import Wild from '../../img/Wild.jpg'
import Regresso from '../../img/regresso.png'
import Caminho from '../../img/caminho.jpg'

let cartazes = [
	{
		"id": 1,
		"src": naturezaSelvagem,
		"nome": "Na Natureza Selvagem"
	},
	{
		"id": 2,
		"src": Capitao,
		"nome": "Capitão Fantástico"
	},
	{
		"id": 3,
		"src": Wild,
		"nome": "Livre"
	},
	{
		"id": 4,
		"src": Regresso,
		"nome": "O Regresso"
	},
	{
		"id": 5,
		"src": Caminho,
		"nome": "O Caminho"
	}
]
export default props =>
(
    <div className='Filme'>
		{cartazes.map(cartaz => (
			<Link to={{
				pathname: "/Sinopse",
				params: {
					id: cartaz.id,
					img: cartaz.src
				}
			}} className='Filme'>
				<img id={cartaz.id} src={cartaz.src} title={cartaz.nome}></img>
       		</Link>
		))}
    </div>
)