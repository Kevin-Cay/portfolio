import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.section`
    width: 100%;
    height: auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 4em 0 4em ;
    @media (max-width:780px){
        height: 750px ;
        padding: 0 2em 2.5em 2em;
    }
    @media (max-width:450px){
        height: 900px ;
        padding: 0 2em 2.5em 2em;
    }
`


const Title = styled.div`
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
const Puntos = styled.div`
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
const Content =  styled.div`
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

const ImageDiv = styled.div`
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
const MessageDiv = styled.div`
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
const Message = styled.div`

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

const BottonIcon = styled.div`
    width: 50px ;
    height: 50px ; 
    position: absolute ;
    right: 2em;
    bottom: 2em;
    color: #eee;
`


function AboutMe() {
    return (
        <Container id="about" nopadding >
            <Title>
                <Puntos />
                {/* <h1>About Me<span>.</span></h1> */}
                <h1>Sobre mi<span>.</span></h1>
            </Title>
            <Content>
            <ImageDiv >
                <div>
                </div>
            </ImageDiv>
            <MessageDiv>
                <Message>
                    {/* <div>
                    <h2>
                    Hello! My name is <span>Kevin.</span> Nice to meet you.
                    </h2>
                    <p>
                    I’m a student and a passionate developer who loves coding, robots and all about technology.
                    I enjoy creating software solutions to improves the lives around me. I’m a person who is able to control a situation rather than have a situation control me.
                    </p>
                     <p>
                         Code is an <span>!important</span>  part of my life.
                    </p> 
                    <p>
                        My adventure is just beginning.
                    I know that actually we can change the world with code that’s 
                    </p> 
                    <p>
                    I’m always creating, always learning, and never bored.
                    </p>
                    </div> */}
                     <div>
                    <h2>
                    Hola! Mi nombre es <span>Kevin.</span> Un placer conocerte.
                    </h2>
                    <p>
                    Soy un estudiante al que le encanta desarrollar código y ayudar a las personas que están al rededor. 
                    Siempre quiero encontrar la mejor solución para cualquier problema. Yo sé que podré llegar lejos. 
                    </p>
                     <p>
                    El código es una parte <span>!importante</span>  de mi vida.
                    </p> 
                    <p>
                    Yo siempre estoy creando, aprendiendo y mejorando. 
                    </p>
                    </div> 
                    
                <Button>
                    <a href="/KV-CV.pdf" download >
                    Descargar CV
                    </a>
                </Button>
                <BottonIcon>
                   <Image
                    src="/circuit.svg"
                    alt="circuit"
                    width={500}
                    height={500}
                    layout="responsive"
                     />
                </BottonIcon>
                </Message>
                
            </MessageDiv>
            </Content>
            
        </Container>
    )
}

export default AboutMe
