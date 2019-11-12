import './Filme.css'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import naturezaSelvagem from '../../img/naturezaSelvagem.jpg'
import Capitao from '../../img/capitao.png'
import Wild from '../../img/Wild.jpg'
import Regresso from '../../img/regresso.png'
import Caminho from '../../img/caminho.jpg'
import Main from './Main'

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

const headerProps = {
    icon: 'list-alt',
    title: 'Filmes'
}

export default class Filme extends Component{
	constructor(props) {
		super(props);
		this.state = {}
	  };

	render(){
		return(
			<Main {...headerProps}>
				<div className='Filme flex flex-wrap'>
					{cartazes.map(cartaz => (
						<Link to={{
							pathname: "/Sinopse",
							params: {
								id: cartaz.id,
								img: cartaz.src
							}
						}} className='Filme itemFilme'>
							<img id={cartaz.id} src={cartaz.src} title={cartaz.nome}></img>
						</Link>
					))}
				</div>
			</Main>
		)
	}
}