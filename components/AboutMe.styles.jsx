import styled from 'styled-components'


export const AboutContent =  styled.div`
margin-top: 2em;
width:100%;
height: 90%;   
display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: 1fr;
@media (max-width:780px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(9, 1fr);
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
        width: 12em;
        height: 12em;
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
        grid-row: 1/3;
        div{
            width: 10em;
            height: 10em;
        }
    }
`

export const MessageDiv = styled.div`
box-sizing: border-box;
grid-column: 3/-1;
grid-row:1/-1;
height:100%;
width:100%;
display: flex;
align-items: flex-start;
justify-content: center;
@media (max-width:780px){
    grid-column: 1/-1;
    grid-row: 3/-1;
}
`
export const Message = styled.div`

    width:85%;
    height: 100% ;
    background-color: #666666 ;
    border-radius: 5px;
    box-shadow: 0 0 3px 5px rgba(0,0,0,0.025) ;
    position: relative;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    span{
        color: #ffc340 ; 
    }
    p{
        font-size:1.2rem;
    }
    h2{
        font-size:1.9rem;
    }
    &::after{
        content: " ";
        position: absolute;
        left: -25px;
        top: 75px;
        border-top: 25px solid transparent;
        border-right: 25px solid #666666;   
        border-left: none;
        border-bottom: 25px solid transparent;
      }
    @media (max-width:780px){
        padding: 2em 1.5em ;
        margin-top: 2em;
        min-width:300px;
        width:100%;
        height: auto ;
        &::after{
            content: " ";
            position: absolute;
            left: 40%;
            right: 50%;
            top: -20px;
            border-top: none;
            border-right: 25px solid transparent;
            border-left: 25px solid transparent;
            border-bottom: 25px solid #666666;
        }
        h2{
        font-size:1.5rem;
    }
    }
`

const Button = styled.button`
    background-color: transparent;
    max-height:50px;
    max-width: 200px;
    font-weight: 600;
    padding: 0.8rem 1.8rem ;
    border-radius:2px;
    color: #ffc340;
    border: 2.5px #ffc340 solid;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover{
        background-color: #ffc340;
        color:#454546;
    }
`

export const BottonIcon = styled.div`
width: 50px ;
height: 50px ; 
position: absolute ;
right: 2em;
bottom: 2em;
color: #eee;
`