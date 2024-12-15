import Styled from 'styled-components'







export const Container = Styled.div`
background-color: black;
width: 100%;
height: 100%;

`
export const Main = Styled.div`
background-color: black;
width: 100%;
height: 100%;
padding-bottom: 60px;
padding-left: 10px;
display: grid;
justify-content: center;
grid-template-columns: repeat(auto-fill, minmax(200px, 16%));
grid-gap: 5px;


p{
color: white;
font-size: 30px;
margin: 0 auto;
font-weight: 700; 
text-align: center;
}
`

export const Cast = Styled.h2`
font-size: 38px;
color: white;
text-align: center;
margin-top: 30px;
margin-bottom: 30px;

`




export const ReleaseContent = Styled.div`
width: 200px;
height: 200px;
margin-top: 33px;


img{
    width: 200px;
    padding: 8px;
} 


p{
    color: white;
    font-size: 13px;
    font-weight: 800;
}



.nameTrack{
    font-size: 11px;
    font-weight: 400;
}

&:hover{
    opacity: 0.6;
}

`
