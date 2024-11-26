import Styled from 'styled-components'




export const Container = Styled.div`
background-color: black;

  width: 100%;
  min-height: 100vh; 
  display: flex; 
  flex-direction: column;
  justify-content: space-between;



`

export const Content= Styled.div`
width: 100%;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
flex-grow: 1;

h1{
    color: white;
    margin-top: 50px;
    font-size: 35px;

    @media (max-width: 730px){
        font-size: 20px;
  }
}

p{
    color: white;
    font-size: 15px;
    text-align: justify;
    width: 80%;
    padding-bottom: 60px ;
    margin-top: 30px;
}

img{
    width: 350px;
    opacity: 0.1; 
    transition: 500ms;

    &:hover{
        opacity: 1;
    }

    @media (max-width: 730px){
    width: 85%; 
  }
}




`
