import styled from "styled-components"
import Typed from 'react-typed';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import Link from 'next/link'

const Container = styled.section`
    width: 100%;
    height:500px;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 4em 3.5em 4em ;

    @media (max-width:960px){
        padding: 1em 2em 2.5em 2em;
    }
`

const Content =  styled.div`
    width:100%;
    height: 100%;
    min-width: 300px;
    background-color: #454546;
    opacity: 0.8;
    background-image: radial-gradient(#8c8c8c 1px, #454546 1px);
    background-size: 18px 18px;
    /* background-color: #454546;
    opacity: 0.9;
    background-image: radial-gradient(#8c8c8c 0.55px, #454546 0.55px);
    background-size: 11px 11px; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 0;
`
const ImageContainer = styled.div`
    width: 8em;
    height: 8em;
    background-color: #ffc340;
    border-radius: 50%;
    background-color: #ff9800 ; 
    overflow: 'hidden';
    position: relative;
    background-size: cover;
    background-image: url('/avatar.png') ;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.1) ;
`

const H1 = styled.h1`
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

const TypedText = styled.p`
    margin: 0;
    font-size:1.5rem;
    color:#ccc;
    @media (max-width:780px){
        font-size: 1.3rem;
    }
`
const SocialMediaMenu = styled.div`
    display: block;
    transition: all 0.3s ease-in;
    a:hover{
        color:#ffc340 ;
    }
`

const Button = styled.div`
    font-weight: 600;
    padding: 0.8rem 1.8rem ;
    border-radius:2px;
    color: #ffc340;
    border: 2.5px #ffc340 solid;
    cursor: pointer;
    transition: all 0.3s ease-in;
    font-size:18px;
    &:hover{
        background-color: #ffc340;
        color:#454546;
    }
`


function Header() {
    return (
        <Container id="header" nopadding >
            <Content>
                <ImageContainer>
                </ImageContainer>
                <H1>Kevin Cay<span>.</span> </H1>
                <TypedText>
                <Typed
                styled={{marginTop: '0px'}}
                strings={[
                    "I’m a Front-End developer.",
                    // "I’m a Junior Dev.",
                    "I’m a Tech lover."
                    ]}
                    typeSpeed={85}
                    backSpeed={85}
                    loop >
                </Typed>
                </ TypedText>

                <SocialMediaMenu>
                    <a 
                    href="https://github.com/Kevin-Cay" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BsGithub  
                    size={'2rem'} 
                    style={{marginRight: "1rem", cursor: "pointer"}} 
                    />
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/kevin-cay/" 
                    target="_blank" 
                    rel="noopener noreferrer" >
                    <BsLinkedin  
                    size={'2rem'} 
                    style={{cursor: "pointer"}} 
                    />
                    </a>
                </SocialMediaMenu>
                    <Button>
                        <Link href="#contact" passHrefs >
                        {/* Hire me  */}
                        Salúdame
                        </Link>
                    </Button>
            </Content>
        </Container>
    )
}

export default Header
