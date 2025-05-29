import { Container, Main, Cast, ReleaseContent,  } from './styles'
import axios from 'axios'
import {FooterSite} from '../../Components/Footer'

import { HeaderSite } from '../../Components/Header';
import { useEffect, useState } from 'react';

  
    
export function Releases() {
const [albums, setAlbums] = useState([]);
const [loading, setLoading] = useState(true)

     useEffect(() =>{

          async function getDiscografy(){
              try{
               const {data} = await axios.get('https://simbiose-api.onrender.com/api/music')
             
            
              
                    setAlbums(data)
                    
               
           
             
              } catch(error){
               console.error("Erro ao obter discografia:", error);
              } finally {
                setLoading(false)
              }
            
          };
         
          getDiscografy()
     },[])

    return (

        <Container>

            <HeaderSite />
            <Cast>Releases</Cast>
            <Main>
        
            {loading ? <p>Loading Releases...</p>  : 
            
            albums && albums.map((track, index) => (
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