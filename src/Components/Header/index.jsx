import { Container, Header, A, HeaderResponsivo, MenuIconStyled, OptionsMenu, AResponsive} from './styles'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo-letra.png'
import Logo3 from '../../assets/simbiosebranco.png'
import { useState } from 'react'







export function HeaderSite() {
    const [isOpen, setIsOpen] = useState(false)



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
                        <AResponsive to={'/'}>Home</AResponsive>
                        <AResponsive to={'/releases'}>Releases</AResponsive>
                        <AResponsive>Merchandising</AResponsive>
                        <AResponsive to={'/artists'}>Artists</AResponsive>
                        <AResponsive to={'/sobre'}>About</AResponsive>
                        <img src={Logo3} />
                    </OptionsMenu>


            )}
           

            <MenuIconStyled  fontSize='large' style={{color: 'black'}}/>
            </HeaderResponsivo>





            <Header>
                <img src={Logo} />
                <div>
                    <A to={'/'}>Home</A>
                    <A to={'/releases'}>Releases</A>
                    <A>Merchandising</A>
                    <A to={'/artists'}>Artists</A>
                    <A to={'/sobre'}>About</A>
                </div>
                <img src={Logo2} />
            </Header>

        
        </Container>
    )
}