import { Container, Main, Cast, ArtistContent, Img, ModalStyled} from './styles'


import { Artists } from './arrayArtists'
import {FooterSite} from '../../Components/Footer'
import { useState } from 'react'



import { HeaderSite } from '../../Components/Header';



export function ArtistsCast() {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [selectedArtist, setSelectedArtist] = useState(null);


     const openModal = (Artists) => {
         
          setSelectedArtist(Artists)
          setIsModalOpen(true)
     };

     const closeModal = () => {
          setIsModalOpen(false)
          setSelectedArtist(null)
     };

   
     return (

          <Container>

               <HeaderSite />
               <Cast>Cast Simbiose</Cast>
               <Main>

                    {Artists && Artists.map((artist, index) => (
                           <ArtistContent key={index} onClick={() => openModal(artist)}>
                              <div className='imgWrapper'>
                                   <Img src={artist.photo} alt={artist.photo} style={{ objectFit: 'fill' }} loading='lazy' />
                                   <div className='overlay'>
                                        
                                   </div>
                                   <p className='zero'>{artist.name}</p>
                              </div>
                              
                           
                              <span>{artist.name}</span>
                             
                             
                           </ArtistContent>

                    ))}
                 
                    {isModalOpen  &&  (

                         <ModalStyled
                         isOpen={isModalOpen}
                         onRequestClose={closeModal}
                         contentLabel={` ${selectedArtist ? selectedArtist.name : "carregando"}`}
                         shouldCloseOnOverlayClick={true}
                         closeTimeoutMS={400}
                       
                       
                       
                        
                         
                         style={{
                              content: {
                             
                                
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                         
                               
                              },
                              overlay:{
                                   backgroundColor: 'rgba(238, 228, 228, 0.5)',
                                   display: 'flex', 
                                   justifyContent: 'center', 
                                   alignItems: 'center', 
                                   zIndex: 1000, 
                              }
                           
                            }}
                         >

                              
                          <img className='artistPic' src={selectedArtist.photo} />
                         <h2>{selectedArtist.name}</h2>
                         <p>{selectedArtist.description}</p>
                         <div className='iconsLink'>
                              <a  className='link' target="_blank" href={selectedArtist.link}>
                                   <img className='icon' src={selectedArtist.icon} />
                              </a>

                                <a className='link' target="_blank" href={selectedArtist.link2}>
                                    <img className='icon' src={selectedArtist.icon2} />
                              </a>
                            
                         </div>

                         {/* <button className='close' onClick={closeModal}>X</button>    */}
                         </ModalStyled>
                    )}
                    

                 


               </Main>
               <FooterSite/>
          </Container>
     )
}