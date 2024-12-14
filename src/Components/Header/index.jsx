import { Container, Header, A, HeaderResponsivo, MenuIconStyled, OptionsMenu, AResponsive} from './styles'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo-letra.png'
import Logo3 from '../../assets/simbiosebranco.png'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'







export function HeaderSite() {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation()

  




 



function openMenu(){
    setIsOpen(!isOpen)
}

    return (

        <Container>

            <HeaderResponsivo>
            <MenuIconStyled  fontSize='large' onClick={openMenu}/>
            <img src={Logo} />
            
            {isOpen && (
                     <OptionsMenu >
                        <AResponsive to={'/'} >Home</AResponsive>
                        <AResponsive to={'/releases'} >Releases</AResponsive>
                        <AResponsive >Merchandising</AResponsive>
                        <AResponsive to={'/artists'}>Artists</AResponsive>
                        <AResponsive to={'/sobre'} >About</AResponsive>
                        <img src={Logo3} />
                    </OptionsMenu>


            )}
           

            <MenuIconStyled  fontSize='large' style={{color: 'black'}}/>
            </HeaderResponsivo>





            <Header>
                <img src={Logo} />
                <div>
                    <A to={'/'} style={{opacity: location.pathname === '/'  ? 0.4 : 1 }} >Home</A>
                    <A to={'/releases'} style={{opacity: location.pathname === '/releases' ? 0.4 : 1 }} >Releases</A>
                    <A>Merchandising</A>
                    <A to={'/artists'} style={{opacity: location.pathname === '/artists' ? 0.4 : 1 }} >Artists</A>
                    <A to={'/sobre'} style={{opacity: location.pathname === '/sobre' ? 0.4 : 1 }}>About</A>
                </div>
                <img src={Logo2} />
            </Header>

        
        </Container>
    )
}