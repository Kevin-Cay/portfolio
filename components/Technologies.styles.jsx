import styled from 'styled-components';


export const ContentImg =  styled.div`
margin-top: 1.5em;
width:100%;
height: 175px;   
display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: 1fr;
@media (max-width:780px){
    height:350px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
}

`

export const ImageDiv = styled.div`
grid-column: 1/3;
grid-row:1/-1;
width: 100%;
height:100%;
display: flex;
align-items: flex-start;
justify-content: center;
div{
    width: 8em;
    height: 8em;
    border-radius: 100%;
    background-color: #ff9800 ; 
    overflow: 'hidden';
    position: relative;
    background-size: cover;
    background-image: url('/avatar.png') ;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.1) ;
}

@media (max-width:780px){
    grid-column: 1/-1;
    grid-row: 1/2;
    div{
        width: 6em;
        height: 6em;
    }
}
`

export const MessageDiv = styled.div`
grid-column: 3/-1;
grid-row:1/-1;
height:100%;
width:100%;
display: flex;
align-items: flex-start;
justify-content: start;
@media (max-width:780px){
    justify-content: center;
    grid-column: 1/-1;
    grid-row: 2/-1;
}
`
export const Message = styled.div`
margin-top: 10px;
width:auto;
height: 50% ;
background-color: #666666 ;
border-radius: 5px;
box-shadow: 0 0 3px 5px rgba(0,0,0,0.025) ;
position: relative;
padding: 1rem 2em;
display: flex;
flex-direction: column;
justify-content: center;
&::after{
    content: " ";
    position: absolute;
    left: -15px;
    top: 30px;
    border-top: 15px solid transparent;
    border-right: 15px solid #666666;   
    border-left: none;
    border-bottom: 15px solid transparent;
  }
  p{
    font-size:1.2rem;
  }
@media (max-width:780px){
    margin-top: 2em;
    min-width:300px;
    &::after{
        content: " ";
        position: absolute;
        left: 43%;
        right: 57%;
        top: -20px;
        border-top: none;
        border-right: 25px solid transparent;
        border-left: 25px solid transparent;
        border-bottom: 25px solid #666666;
    }
}
`

export const Content =  styled.div`
margin-top: 0.5em;
width:100%;
height: 40%;   
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows:repeat(2, 1fr);
@media (max-width:780px){
    margin-top: 0;
    height: 60%;  
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
}

`

export const ContentGrid = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center ;
    transition: all 0.3s ease-in;
    h1{
        font-size: 1.3rem;
    }
    &::after{
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #ffc340;
        transition: width .3s;
    }
    &:hover::after{
        width: 60%;
    }
    &:hover{

        color: #ffc340 ;
        cursor:pointer;
    }
    @media (max-width:780px){
        h1{
            font-size: 1rem;
        }
    }
`