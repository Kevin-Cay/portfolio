import React, {useRef} from 'react'
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import { Container, Title, Puntos, P } from './global.styles';
import { ContentContact, ContactImage, FormContact, InputName, InputEmail, InputSubject, InputText, Button, SocialMediaMenu } from './ContactForm.styles';


function ContactForm({language}) {
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

    return (
        <Container 
        id="contact" 
        nopadding 
        mTop='2em'
        height='500px'
        height780='600px'
        height450='700px'
        >
            
            <Title>
            <Puntos />
            {
                language === 'english' ?
                (<>
                <h1>Contact<span>.</span> </h1>
                </>)
                :
                (<>
                <h1>
                Contáctame<span>.</span>
                </h1>
                </>)
            }
            </Title>
            <ContentContact>
                <ContactImage>
                    {/* <P>Let´s talk about something, send me an <a href="mailto:kevincay.2001@gmail.com">email 👋🏽</a> </P> */}
                    {
                        language === 'english' ?
                        (<>
                        <P>Let´s talk about something, send me an <a href="mailto:kevincay.2001@gmail.com">email 👋🏽</a> </P>
                        </>)
                        :
                        (
                            <>
                            <P>
                            ¿Quieres saber más? Envíame un <a href="mailto:kevincay.2001@gmail.com">email 👋🏽</a>    
                            </P>
                            </>
                        )
                    }
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
                    <InputName 
                    type="text" 
                    name="name" 
                    placeholder={ language === "english" ? "Your Name": "Tu nombre"} 
                    required />
                    <InputEmail 
                    type="email" 
                    name="email" 
                    placeholder={ language === "english" ? "Your Email" : "Tu email"} 
                    required />
                    <InputSubject 
                    type="text"
                    name="subject" 
                    placeholder={language === "english" ? "Subject" : "Asunto" }  />
                    <InputText 
                    name="message" 
                    maxLength="199" 
                    placeholder={language === "english" ? "Message" : "Mensaje"} />
                    <Button type="submit" 
                    value={language === "english" ?  "Send Message": "Enviar mensaje"} />
            </FormContact> 
            </ContentContact>
        </Container>
    )
}

export default ContactForm
