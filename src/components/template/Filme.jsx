import './Filme.css'
import React from 'react'

let filmes = [
	{
		"id": 1,
		"titulo": "Na Natureza Selvagem",
		"data": "14/03/2008",
		"sinopse": "Início da década de 90. Christopher McCandless (Emile Hirsch) é um jovem recém-formado, que decide viajar sem rumo pelos Estados Unidos em busca da liberdade. Durante sua jornada pela Dakota do Sul, Arizona e Califórnia ele conhece pessoas que mudam sua vida, assim como sua presença também modifica as delas. Até que, após dois anos na estrada, Christopher decide fazer a maior das viagens e partir rumo ao Alasca.",
		"duracao":"2hrs 27min",
		"diretor":"Sean Penn",
		"elenco": "Emile Hirsch, Marcia Gay Harden, Willian Hurt, Jena Malone, Brian Dierker, Catherine Keener, Vince Vaughn, Kristen Stewart",
		"genero":"Aventura, Drama"
	},
	{
		"id": 2,
		"titulo": "Capitão Fantástico",
		"data": "22/12/2016",
		"sinopse": "Ben (Viggo Mortensen) tem seis filhos com quem vive longe da civilização, no meio da floresta, numa rígida rotina de aventuras. As crianças lutam, escalam, leem obras clássicas, debatem, caçam e praticam duros exercícios, tendo a autossuficiência sempre como palavra de ordem. Certo dia um triste acontecimento leva a família a deixar o isolamento e o reencontro com parentes distantes traz à tona velhos conflitos.",
		"duracao":"1hrs 58min",
		"diretor":"Matt Ross",
		"elenco": "Viggo Mortensen, Frank Langella, George MacKay, Samantha Isler, Annalise Basso, Nicholas Hamilton, Shree Crooks, Charlie Shotwell",
		"genero": "Comédia dramática"
	},
	{
		"id": 3,
		"titulo": "Livre",
		"data": "15/01/2015",
		"sinopse": "Após a morte de sua mãe, um divórcio e uma fase de autodestruição repleta de heroína, Cheryl Strayed (Reese Witherspoon) decide mudar e investir em uma nova vida junto à natureza selvagem. Para tanto, ela se aventura em uma trilha de 1100 milhas pela costa do oceano Pacífico.",
		"duracao":"1hrs 56min",
		"diretor":"Jean-Marc Vallée",
		"elenco": "Reese Witherspoon, Gaby Hoffmann, Laura Dern, Thomas Sadoski, Michiel Huisman, W. Earl Brown, Kevin Rankin, Brian Van Holt",
		"genero": "Drama, Biografia"
	},
	{
		"id": 4,
		"titulo": "O Regresso",
		"data": "04/02/2016",
		"sinopse": "1822. Hugh Glass (Leonardo DiCaprio) parte para o oeste americano disposto a ganhar dinheiro caçando. Atacado por um urso, fica seriamente ferido e é abandonado à própria sorte pelo parceiro John Fitzgerald (Tom Hardy), que ainda rouba seus pertences. Entretanto, mesmo com toda adversidade, Glass consegue sobreviver e inicia uma árdua jornada em busca de vingança.",
		"duracao":"2hrs 36min",
		"diretor":"Alejandro González Iñárritu",
		"elenco": "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, Will Poulter, Paul Anderson, Kristoffer Joner, Brendan Fletcher, Lukas Hass",
		"genero": "Faroeste, Aventura"
	},
	{
		"id": 5,
		"titulo": "O Caminho",
		"data": "19/11/2010",
		"sinopse": "1822. Hugh Glass (Leonardo DiCaprio) parte para o oeste americano disposto a ganhar dinheiro caçando. Atacado por um urso, fica seriamente ferido e é abandonado à própria sorte pelo parceiro John Fitzgerald (Tom Hardy), que ainda rouba seus pertences. Entretanto, mesmo com toda adversidade, Glass consegue sobreviver e inicia uma árdua jornada em busca de vingança.",
		"duracao":"2hrs 08min",
		"diretor":"Emilio Estevez",
		"elenco": "Martin Sheen, Emilio Estevez, Deborah Kara Unger, Yorick Van Wangeningen, James Nesbitt, Renee Estevez, Spencer Garrett, Tchéky Karyo",
		"genero": "Comédia, Aventura, Drama"
	},
	{
		"id": 6,
		"titulo": "Comer, Rezar, Amar",
		"data": "13/08/2010",
		"sinopse": "Elizabeth (Julia Roberts) descobre que sempre teve problemas nos seus relacionamentos amorosos. Um dia, ela larga tudo, marido, trabalho, amigos, decidida a viver novas experiências em lugares diferentes por um ano inteiro. E parte para a Índia, Itália e Bali, para se reencontrar numa grande viagem de auto conhecimento.",
		"duracao":"2hrs 20min",
		"diretor":"Ryan Murphy",
		"elenco": "Julia Roberts, Richard Jenkins, Javier Bardem, Billy Crudup, Viola Davis, James Franco, David Lyons, Tuva Novotny",
		"genero": "Drama"
	},
	{
		"id": 7,
		"titulo": "Comer, Rezar, Amar",
		"data": "13/08/2010",
		"sinopse": "Elizabeth (Julia Roberts) descobre que sempre teve problemas nos seus relacionamentos amorosos. Um dia, ela larga tudo, marido, trabalho, amigos, decidida a viver novas experiências em lugares diferentes por um ano inteiro. E parte para a Índia, Itália e Bali, para se reencontrar numa grande viagem de auto conhecimento.",
		"duracao":"2hrs 20min",
		"diretor":"Ryan Murphy",
		"elenco": "Julia Roberts, Richard Jenkins, Javier Bardem, Billy Crudup, Viola Davis, James Franco, David Lyons, Tuva Novotny",
		"genero": "Drama"
	}
];

export default props =>
(
    <div className='Filme'>
        <ul>
        	{filmes.map(filme =>(
        		<li key={filme.id} className ='itemFilme'>
	        		<div>
	        			<span className="text-title">
	        				{filme.titulo}  ({filme.data}) 
	        			</span>
		        		<div>
		        			<span className="text-title">
		        				Sinopse:  
		        			</span> 
		        			<span>
		        				{filme.sinopse}
		        			</span>
		        			<div>
		        				<span className="text-title">
		        					Diretor: 
		        				</span>
		        				{filme.diretor}
		        			</div>
		        			<div>
		        				<span className="text-title">
		        					Elenco: 
		        				</span> 
		        				{filme.elenco}
		        			</div>
		        			<div>
		        				<span className="text-title">
		        				Gênero: 
		        				</span>
		        				{filme.genero}
		        			</div>
		        		</div>
	        		</div>
	        	</li>
        	))}
        </ul>
    </div>
)