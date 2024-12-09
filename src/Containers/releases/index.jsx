import { Container, Main, Cast, ReleaseContent } from './styles'
import axios from 'axios'
import {FooterSite} from '../../Components/Footer'

import { HeaderSite } from '../../Components/Header';
import { useEffect, useState } from 'react';

  
    
export function Releases() {
const [albums, setAlbums] = useState([]);

     useEffect(() =>{

          async function getDiscografy(){
              try{
               const {data} = await axios.get('https://simbiose-api-5.onrender.com/api/music')
               console.log(data)
               setAlbums(data)
              
               // const response = await fetch('https://simbiose-api-5.onrender.com');
               // if(!response.ok){
               //      throw new Error('Network response was not ok');
               // }
               // const data = await response.json()
           
             
              } catch(error){
               console.error("Erro ao obter discografia:", error);
              }
            
          };
         
          getDiscografy()
     },[])

    return (

        <Container>

            <HeaderSite />
            <Cast>Releases</Cast>
            <Main>

            {albums && albums.map((track, index) => (
                  <ReleaseContent key={index}>
                    <a href={track.url} target="_blank" rel="noopener noreferrer">
                    <img src={track.coverart}/>

                    </a>

                    
                        <p>{track.title}</p>
                        <p className='nameTrack'>{track.artists}</p>
                  
                  
                  
                  </ReleaseContent>
                  
            ))}
              
                
               
            </Main>
            <FooterSite/>
        </Container>
    )
}



//'http://localhost:3001/api/music' endpoint local