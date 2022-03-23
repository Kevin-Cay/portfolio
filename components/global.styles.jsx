import styled from 'styled-components';

export const Container = styled.section`
    margin-top: ${props=> props.mTop || 0 } ;
    width: 100%;
    height: ${props => props.height || 'auto' };
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 4em 0 4em ;
    @media (max-width:780px){
        height: ${props => props.height780 || 'auto' } ;
        padding: 0 2em 2.5em 2em;
    }
    @media (max-width:450px){
        height: ${props => props.height450 || 'auto' } ;
        padding: 0 2em 2.5em 2em;
    }
`

export const Title = styled.div`
     width: 100%;
    height: auto ;
    margin: 0.5rem 0 0 0;
    position: relative;
    h1{
        font-size: 3rem;
        margin:0px;
        position: relative;
        left: 25px;
    }
    span{
        font-weight:600;
        color: #ffc340;
        font-size: 3rem;
    }
    @media (max-width:780px){
       h1{
           font-size: 2.2rem;
       }
        
    }
`
export const Puntos = styled.div`
        width: 50px;
        height: 50px;
        opacity: 0.9;
        background-size: 10px 10px;
        background-image: radial-gradient(#ffc340 0.85px, #454546 0.85px);
        position: absolute;
        top:-15px;
        left: 0px;
        @media (max-width:780px){
        top:-20px;
        left: 0px;
    }
`


export const ImageContainerAvatar = styled.div`
    width: ${props=> props.width};
    height: ${props=> props.height};
    background-color: #ffc340;
    border-radius: 50%;
    background-color: #ff9800 ; 
    overflow: 'hidden';
    position: relative;
    background-size: cover;
    background-image: url('/avatar.png') ;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.1) ;
`

export const H1 = styled.h1`
    font-size: 3rem;
    margin:0px;
    span{
        font-weight:600;
        color: #ffc340;
        font-size: 3rem;
    }
    @media (max-width:780px){
        font-size: 2.5rem;
    }
`

export const Button = styled.a`
background-color: transparent;
max-height: ${props=> props.maxHeight} ;
max-width: ${props=>props.maxWidth};
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
export const P = styled.div`
font-size:1.2rem;
a{
    color: #ffc340;
}

`
