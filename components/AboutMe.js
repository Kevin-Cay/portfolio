import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Container , Title, Puntos, Button } from './global.styles';
import { AboutContent, ImageDiv, MessageDiv , Message, BottonIcon} from './AboutMe.styles';



function AboutMe({language}) {
    return (
        <Container id="about" 
        nopadding 
        height="auto" 
        height780="750px"
        height450='900px' >
            <Title>
                <Puntos />
                {/* <h1>About Me<span>.</span></h1> */}
                <h1> {language == "english" ? 'About Me' : 'Sobre Mi' }<span>.</span></h1>
            </Title>
            <AboutContent>
            <ImageDiv >
                <div>
                </div>
            </ImageDiv>
            <MessageDiv>
                <Message>
                    {
                        language == "english" ?
                        <div>
                        <h2>
                        Hello! My name is <span>Kevin.</span> Nice to meet you.
                        </h2>
                        <p>
                        I’m a a software developer with experience building web applications. I always focus on writing code to create systems that are reliable and user-friendly. 
                        I enjoy creating software solutions to improve lives of those around me. 
                        </p>
                         <p>
                             Code is an <span>!important</span> part of my life but usually I change my computer for circuits and leds.
                        </p> 
                        <p>
                        </p> 
                        <p>
                        I’m always creating, always learning and never get bored.
                        </p>
                        </div> 
                        // Usually change my computer for circuits and leds.
                        :
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
                    }
                     
                    
                <Button maxWidth={'200px'} maxHeight={'50px'} href={language == 'english' ? '/KC-CV-EN.pdf':'/KC-CV-ES.pdf'}  download >
                      {language == "english" ? 'Download CV' :'Descargar CV' }  
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
            </AboutContent>
            
        </Container>
    )
}

export default AboutMe
