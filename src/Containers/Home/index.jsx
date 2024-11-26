import { Container, Main, Pinfo, Container1, Container2, IconImg, Mask, ContainerLinks, IntroText } from './styles'


import { PlaylistSimbiose } from '../../Components/PlaySoundCloud copy'

import IconBand from '../../assets/bandcamp-logo.png';
import Spotify from '../../assets/spotify.png';
import SoundCloud from '../../assets/soundcloud.png';
import Insta from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import Youtube from '../../assets/youtube.png';


import { useState, useEffect } from 'react';


import { HeaderSite } from '../../Components/Header';
import {FooterSite} from '../../Components/Footer'
import {Maps} from '../../Components/mapSimbiose'


export function Home() {
const [mask, setMask] = useState(true)
const [showLinks, setShowLinks] = useState(false)


 



useEffect(() => {
    const Timer = setTimeout(() => {
        setMask(false)
        setShowLinks(true)
        
    },3500);
    return () => clearTimeout(Timer);
},[])




    return (

        <Container>
         
                <HeaderSite/>
            <Main>

                <Container1>
                   
                        <Mask $fade={!mask} />
                            {mask ?  <IntroText $fade={!mask}>Brazilian label, collaborative and independent, focused on the sound power to be heard after the sun goes down.</IntroText> : null}
                        
                            <ContainerLinks $fade={showLinks} $visible={showLinks} >

                                <IconImg   href='https://www.youtube.com/@simbiosesounds' target="_blank" rel="noopener noreferrer">
                                    <img className='icons' src={Youtube} />
                                </IconImg>

                                <IconImg  href='https://soundcloud.com/simbiosesounds' target="_blank" rel="noopener noreferrer">
                                    <img className='icons' src={SoundCloud} />
                                </IconImg>

                                <IconImg  href='https://simbiosesounds.bandcamp.com/' target="_blank" rel="noopener noreferrer">
                                    <img className='icons' src={IconBand} />
                                </IconImg>

                                <IconImg  href='https://www.facebook.com/lsimbiosesoundsl' target="_blank" rel="noopener noreferrer">
                                    <img className='icons' src={Facebook} />
                                </IconImg>

                                <IconImg  href='https://simbiosesounds.bandcamp.com/' target="_blank" rel="noopener noreferrer">
                                    <img className='icons' src={Spotify} />
                                </IconImg >

                                <IconImg  href='https://www.instagram.com/simbiose.sounds/' target="_blank" rel="noopener noreferrer">
                                    <img className='icons' src={Insta} />
                                </IconImg>
                        </ContainerLinks>
                  
                </Container1>


                <Container2>
                    
                    <div className='Player'>
                        <Pinfo>Latest Releases from Simbiose Sounds</Pinfo>
                        <PlaylistSimbiose />
                    </div>

                    <div className='Maps'>
                        <Pinfo>Current location of our Pirates</Pinfo>
                        <Maps/>
                    </div>

                </Container2>
            </Main>
            <FooterSite/>
        </Container>
    )
}