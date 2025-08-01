import { Container, Content,  } from './styles'

import { HeaderSite } from '../../Components/Header';
import Logo from '../../assets/caveira-nova.png'
import {FooterSite} from '../../Components/Footer'



export function About() {






     return (

          <Container>
               <HeaderSite />
               
               <Content>
                    <h1>About Simbiose</h1>
                    <img src={Logo} />

                    

                         <p>
                         Simbiose Sounds, an independent Brazilian record label, echoes in the depths of Psytrance, reverberating the dense and hypnotic pulses of the genre&apos;s nocturnal branches. More than just a music label, Simbiose is a living organism, a true symbiosis among over 30 artists scattered across Brazil, united by their passion for Darkpsy, Hitech, Forest, Psycore, and other dark music subgenres. Founded in January 2023 by a collective of producer friends, the label has already released over 100 tracks, weaving a sonic web that expands with each new release.
                          <br></br>
                          <br></br>
                         The genesis of Simbiose Sounds happened organically, like the roots of a tree intertwining underground. The constant exchange of information, experiences, and, of course, a lot of music among the group members revealed fertile creative ground. Initially, the idea was to create a compilation that brought part of the collective together. However, the search for a label that would embrace this proposal ran into the need for a space that truly understood the essence and strength of such a unique sound. The answer, then, naturally blossomed: to create their own platform, their own ecosystem where creative symbiosis could thrive. Thus, Simbiose Sounds was born, not just as a label but as a manifesto of the Brazilian underground scene.
                          <br></br>
                          <br></br>
                         With a striking visual identity and meticulous curation, Simbiose Sounds seeks not only to release music but to provide immersive sensory experiences. Each track is a portal to unexplored scenarios, a sonic journey that transcends the boundaries of reality. The diversity of styles and influences from each artist nurtures the label&apos;s organism, resulting in a rich and multifaceted catalog. Simbiose Sounds bets on the potential of the Brazilian Psytrance scene, fostering new talents and consolidating established artists, aiming to create a strong and connected community that beats to the same rhythm as the hypnotic beats and contagious energy of psychedelic music.
                         </p>



                    {/* <p>
                    A Simbiose Sounds, gravadora independente brasileira, ecoa nas profundezas do Psytrance, reverberando as pulsações densas e hipnóticas das vertentes noturnas do gênero. Mais do que um selo musical, a Simbiose é um organismo vivo, uma simbiose real entre mais de 30 artistas dispersos pelo Brasil, unidos pela paixão pelo Darkpsy, Hitech, Forest, Psycore e outras ramificações da música dark. Fundada em janeiro de 2023 por um coletivo de amigos produtores, a gravadora já lançou mais de 100 faixas, construindo uma teia sonora que se expande a cada lançamento.
                    <br></br>
                    <br></br>
                    A gênese da Simbiose Sounds se deu de forma orgânica, como as raízes de uma árvore que se entrelaçam no subsolo. A troca constante de informações, experiências e, claro, muita música entre os membros do grupo, revelou um fértil terreno criativo. Inicialmente, a ideia era uma compilação que reunisse parte do coletivo. A busca por uma gravadora que acolhesse a proposta, no entanto, esbarrou na necessidade de um espaço que verdadeiramente compreendesse a essência e a força daquela sonoridade singular. A resposta, então, floresceu naturalmente: criar a própria plataforma, um ecossistema próprio onde a simbiose criativa pudesse prosperar. Nascia assim a Simbiose Sounds, não apenas como um selo, mas como um manifesto da cena underground brasileira.
                    <br></br>
                    <br></br>
                    Com uma identidade visual marcante e uma curadoria criteriosa, a Simbiose Sounds busca não apenas lançar músicas, mas sim proporcionar experiências sensoriais imersivas. Cada faixa é um portal para cenários inexplorados, uma viagem sonora que transcende os limites da realidade. A diversidade de estilos e influências de cada artista nutre o organismo da gravadora, resultando em um catálogo rico e multifacetado. A Simbiose Sounds aposta no potencial da cena Psytrance brasileira, impulsionando novos talentos e consolidando artistas já estabelecidos, com o objetivo de criar uma comunidade forte e conectada, que pulsa na mesma frequência das batidas hipnóticas e da energia contagiante da música psicodélica.
                    </p> */}
                
             
               </Content>


               <FooterSite/>
          </Container>
     )
}