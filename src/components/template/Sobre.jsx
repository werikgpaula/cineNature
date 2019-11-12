import React, {Component} from 'react'
import Main from './Main'
import './Filme.css'

const headerProps = {
    icon: 'list-alt',
    title: 'Sobre'
}

export default class Sobre extends Component{
    constructor(props) {
		super(props);
		this.state = {}
      };
      
    render(){
        return(
            <Main {...headerProps}>
                <div>
                    <span className="text-title">
                    Uma grande importância para a evolução das pessoas como sociedade para o mundo é a aprendizagem sobre a importância da natureza e o respeito que deve-se ter para com ela. É de grande importância reservar um espaço de tempo para passar entre árvores, apreciando os passarinhos e respeitando o espaço para cada ambiente que possa ser notado. 

Filmes que retratam bem como a natureza funciona, e como nossa ações influênciam diretamente o equilibrio da mesma, são de grande importância para o aprendizado, tanto de jovens quanto para as pessoas que possuem uma idade avançada, pois a capacidade de aprendizagem humana é impressionante e é algo que podemos nos orgulhar de que nunca iremos perder com o tempo. Apesar que não ser um contato direto com a natureza, a capacidade de criação artística de vários autores conseguem trazer um sentimento semelhante ao que seria encontrado diretamente ao ar livre, trazendo assim grande empatia para os que estão dispostos a dar uma chance de apreciação.

É pensando nisso que o CineNature foi criado, objetivando trazer filmes renomados que possam trazer grande inteligência sobre os assuntos que condizem à concientização de proteger o meio ambiente.    
                    </span>
                </div>
            </Main>
        )
    }
}