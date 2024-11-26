import { Container, Content,  } from './styles'

import { HeaderSite } from '../../Components/Header';
import Logo from '../../assets/logo.png'
import {FooterSite} from '../../Components/Footer'



export function About() {






     return (

          <Container>
               <HeaderSite />
               
               <Content>
                    <h1>Sobre Simbiose</h1>
                    <img src={Logo} />

             
                    <p>
                    A Simbiose Sounds, gravadora independente brasileira, ecoa nas profundezas do Psytrance, reverberando as pulsações densas e hipnóticas das vertentes noturnas do gênero. Mais do que um selo musical, a Simbiose é um organismo vivo, uma simbiose real entre mais de 30 artistas dispersos pelo Brasil, unidos pela paixão pelo Darkpsy, Hitech, Forest, Psycore e outras ramificações da música dark. Fundada em janeiro de 2023 por um coletivo de amigos produtores, a gravadora já lançou mais de 100 faixas, construindo uma teia sonora que se expande a cada lançamento.
                    <br></br>
                    <br></br>
                    A gênese da Simbiose Sounds se deu de forma orgânica, como as raízes de uma árvore que se entrelaçam no subsolo. A troca constante de informações, experiências e, claro, muita música entre os membros do grupo, revelou um fértil terreno criativo. Inicialmente, a ideia era uma compilação que reunisse parte do coletivo. A busca por uma gravadora que acolhesse a proposta, no entanto, esbarrou na necessidade de um espaço que verdadeiramente compreendesse a essência e a força daquela sonoridade singular. A resposta, então, floresceu naturalmente: criar a própria plataforma, um ecossistema próprio onde a simbiose criativa pudesse prosperar. Nascia assim a Simbiose Sounds, não apenas como um selo, mas como um manifesto da cena underground brasileira.
                    <br></br>
                    <br></br>
                    Com uma identidade visual marcante e uma curadoria criteriosa, a Simbiose Sounds busca não apenas lançar músicas, mas sim proporcionar experiências sensoriais imersivas. Cada faixa é um portal para cenários inexplorados, uma viagem sonora que transcende os limites da realidade. A diversidade de estilos e influências de cada artista nutre o organismo da gravadora, resultando em um catálogo rico e multifacetado. A Simbiose Sounds aposta no potencial da cena Psytrance brasileira, impulsionando novos talentos e consolidando artistas já estabelecidos, com o objetivo de criar uma comunidade forte e conectada, que pulsa na mesma frequência das batidas hipnóticas e da energia contagiante da música psicodélica.
                    </p>
                
             
               </Content>


               <FooterSite/>
          </Container>
     )
}