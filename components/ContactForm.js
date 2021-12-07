import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import Image from 'next/image';

const Container = styled.section`
    margin-top: 2em;
    width: 100%;
    height: 500px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #454546;
    padding: 1em 4em 0 4em ;
    @media (max-width:680px){
        height: 700px ;
        padding: 0 2em 2.5em 2em;
    }
`

const Title = styled.div`
    width: 100%;
    height: auto ;
    margin: 0.5rem 0 0 0;
    position: relative;
    max-width: 1440px;
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
    @media (max-width:960px){
       h1{
           font-size: 2.2rem;
       }
        
    }
`
const P = styled.div`
    font-size:1.2rem;
    a{
        color: #ffc340;
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
        @media (max-width:960px){
        top:-20px;
        left: 0px;
    }
`

const Content = styled.div`
    width:100%;
    height:90%;
    display: grid;
    padding-top:1rem;
    grid-gap: 2rem ; 
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    @media (max-width:680px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
    }
`

const ContactImage = styled.div`
    grid-column: 1/2 ;
    height:85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width:680px){
        height:100%;
        grid-column: 1/-1 ;
        grid-row: 1/3;
    }
`

const FormContact = styled.form`
    grid-column: 2/-1;
    grid-row:1/-1;
    width:100%;
    height:85%;
    display: grid;
    grid-gap: 25px ;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr) ;
    @media (max-width:680px){
        grid-template-rows: repeat(6, 1fr) ; 
        grid-column: 1/-1;
        grid-row: 3/-1 ;
        height: 100%;
    }
    
`

const InputName = styled.input`
    width: 100% ;
    background-color: #eee;
    border-radius: 5px;
    grid-column: 1/2 ;
    grid-row: 1/2;
    border: none;
    background-color: #eee ;
    outline:none;
    font-size:0.8rem;
    font-weight: 600;
    padding-left:15px;
    box-shadow: 0 0 5px 5px rgba(0,0,0, 0.07);
    @media (max-width:680px){
        grid-column: 1/-1;
        grid-row:1/2;
        font-size: 16px;
    }
`
const InputEmail = styled.input`
    width: 100% ;
    background-color: #eee;
    border-radius: 5px;
    grid-column: 2/3 ;
    grid-row: 1/2;
    border: none;
    background-color: #eee ;
    outline:none;
    font-size:0.8rem;
    font-weight: 600;
    padding-left: 15px ;
    box-shadow: 0 0 5px 5px rgba(0,0,0, 0.07);
    @media (max-width:680px){
        grid-column: 1/-1;
        grid-row:2/3;
        font-size: 16px;
    }
`

const InputSubject = styled.input`
    width: 100% ;
    background-color: #eee;
    border-radius: 5px;
    grid-column: 1/3 ;
    grid-row: 2/3;
    border: none;
    background-color: #eee ;
    outline:none;
    font-size:0.8rem;
    font-weight: 600;
    padding-left: 15px ;
    box-shadow: 0 0 5px 5px rgba(0,0,0, 0.07);
    @media (max-width:680px){
        grid-column: 1/-1;
        grid-row:3/4;
        font-size: 16px;
    }
`
const InputText = styled.textarea`
    width: 100% ;
    background-color: #eee;
    border-radius: 5px;
    grid-column: 1/3 ;
    grid-row: 3/5;
    border: none;
    background-color: #eee ;
    outline:none;
    font-size:0.8rem;
    font-weight: 600;
    padding: 15px 0 0 15px;
    resize: none;
    box-shadow: 0 0 5px 5px rgba(0,0,0, 0.07);
    @media (max-width:680px){
        grid-column: 1/-1;
        grid-row:4/6;
        font-size: 16px;
    }
`
const Button= styled.input`
    background-color:transparent;
    font-weight: 600;
    width:60%;
    border-radius:2px;
    color: #ffc340;
    border: 2.5px #ffc340 solid;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover{
        background-color: #ffc340;
        color:#454546;
    }
    @media (max-width:680px){
        width: 80%;
    }
`


function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_78q4fwk', 'template_66xherp', form.current, 'user_mfMFLAQfvQWWzQ9UClL9q')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
          
      };
    
    const SocialMediaMenu = styled.div`
      display: block;
        transition: all 0.3s ease-in;
        a:hover{
            color:#ffc340 ;
        }
      `

    return (
        <Container id="contact" nopadding >
            
            <Title>
            <Puntos />
                <h1>
                Contáctame<span>.</span>
                </h1>
            </Title>
            <Content>
                <ContactImage>
                    {/* <P>Let´s talk about something, send me an <a href="mailto:kevincay.2001@gmail.com">email 👋🏽</a> </P> */}
                    <P>Hablemos sobre algo, envíame un  <a href="mailto:kevincay.2001@gmail.com">email 👋🏽</a> </P>
                    
                    {/* <Image 
                    src={"/email_image.svg"} 
                    alt="email" 
                    layout="fill"  
                    objectFit="contain" 
                    /> */}
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
                </ContactImage>
            <FormContact ref={form} onSubmit={sendEmail} >
                    <InputName type="text" name="name" placeholder="Your Name" required />
                    <InputEmail type="email" name="email" placeholder="Your Email" required />
                    <InputSubject type="text" name="subject" placeholder="Subject"  />
                    <InputText name="message" maxLength="199" placeholder="Message" />
                    <Button type="submit" value="Send Message" />
            </FormContact> 
            </Content>
        </Container>
    )
}

export default ContactForm
