import Styled from 'styled-components'
import Modal from "react-modal";



export const Container = Styled.div`
background-color: black;
width: 100%;
height: 100%;

`
export const Main = Styled.div`
width: 100%;
padding-bottom: 20px;
padding-left: 15px;
display: grid;
justify-content: center;
grid-template-columns: repeat(auto-fill, minmax(200px, 16%));
grid-gap: 5px;
`

export const Cast = Styled.h2`
font-size: 38px;
color: white;
text-align: center;
margin-top: 30px;
margin-bottom: 30px;

`

export const ModalStyled = Styled(Modal)`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
border-radius: 15px;
transition: 0.4s ease;
width: 50%;


 
@media (max-width: 375px){
      height: 610px;
    }



.iconsLink{

    padding: 2px;
    margin-top: 10px;
    display: flex;
    gap: 20px;


    @media (max-width: 375px){
      
    }
}

.artistPic{

    width: 280px;
  
    border-radius: 10px;
    max-width: 300px;
    max-height: 300px;
    object-fit: cover;
    

    @media (max-width: 860px){
        width: 300px;
    }


    
    @media (max-width: 375px){
        width: 100px;
        margin-top: 20px;
        height: 200px;
    }


    @media (max-width: 414px){
        width: 170px;
    }


    @media (max-width: 430px){
        width: 250px;
    }

    @media (max-width: 307px){
        width: 100px;
    }
}

.link{
text-decoration: none;

}


.icon{
  
    width: 40px;

    &:hover{
        opacity: 0.6;
    }


    @media (max-width: 375px){
       width: 20px;
    }


    @media (max-width: 414px){
       width: 40px;
    }


    
    @media (max-width: 430px){
       width: 40px;
    }
}

h2{
    color: white;
    padding: 10px;

    @media (max-width: 375px){
       font-size: 15px;
    }


    @media (max-width: 414px){
       font-size: 15px;
    }

    @media (max-width: 430px){
       font-size: 16px;
    }

}

p{
    color: white;
    font-size: 13px;
    text-align: justify;

    @media (max-width: 375px){
       font-size: 12px;
    }


    @media (max-width: 414px){
       font-size: 12px;
    }

    @media (max-width: 430px){
       font-size: 12px;
    }
}

@media (max-width: 1024px){
width: 80%;

}


@media (max-width: 860px){

    width: 90%;

}

@media (max-width: 770px){

width: 80%;

}

@media (max-width: 375px){
    width: 90%;

}


`


export const ArtistContent = Styled.div`
width: 100%;

display: flex;
justify-content: center;
position: relative;

cursor: pointer;
margin-top: 10px;
flex-direction: column;

@media (max-width: 430px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}




span{
    font-size: 12px;
    color: white;
    margin-top: 3px;
    margin-left: 5px;
}

.imgWrapper{
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;


    @media (max-width: 430px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
  
}


&:hover{
    

    p{
        opacity: 1;
    }

    div{
        opacity: 1; 
    }
}

p{
   
color: white;
position: absolute;
text-align: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-weight: bold;
font-size: 25px;
opacity: 0;
transition: 300ms ease;

}

.overlay{
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.9);
transition: 100ms ease;
opacity: 0; 
}
`



export const Img = Styled.img`
 
object-fit: cover;
border-radius: 5px;
width: 100%;
height: 100%;


`

