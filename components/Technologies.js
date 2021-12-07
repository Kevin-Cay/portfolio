import styled from 'styled-components';
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiFirebase, SiNextdotjs, SiStyledcomponents, SiMaterialui} from 'react-icons/si'


const Container = styled.section`
margin: 2em 0;
width: 100%;
height: 700px ;
max-width: 1440px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1em 4em 0 4em ;
@media (max-width:780px){
    height: 1000px ;
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
const ContentImg =  styled.div`
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
const ImageDiv = styled.div`
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
const MessageDiv = styled.div`
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
const Message = styled.div`
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
const Content =  styled.div`
    margin-top: 0.5em;
    width:100%;
    height: 40%;   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2fr;
    @media (max-width:780px){
        margin-top: 0;
        height: 60%;  
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

`

const Html = styled.div`
    grid-column: 1/2 ;
    grid-row: 1/2;
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

const Css = styled.div`
    grid-column: 2/3 ;
    grid-row: 1/2;
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
        cursor: pointer;
    }
    @media (max-width:780px){
        h1{
            font-size: 1rem;
        }
    }
`
const JS = styled.div`
    grid-column: 3/4 ;
    grid-row: 1/2;
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
        cursor: pointer;
    }
    @media (max-width:780px){
        h1{
            font-size: 1rem;
        }
        grid-column: 1/2;
        grid-row: 2/3;
    }
`
const RJS = styled.div`
    grid-column: 4/-1 ;
    grid-row: 1/2;
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
        cursor: pointer;
    }
    @media (max-width:780px){
        h1{
            font-size: 1rem;
        }
        grid-column: 2/-1;
        grid-row: 2/3;
    }
`
const SC = styled.div`
    grid-column: 1/2 ;
    grid-row: 2/-1;
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
        width: 80%;
    }
    &:hover{
        color: #ffc340 ;
        cursor: pointer;
    }
    @media (max-width:780px){
        h1{
            font-size: 1rem;
        }
        grid-column: 1/2;
        grid-row: 3/4;
    }
`
const Material = styled.div`
    grid-column: 2/3 ;
    grid-row: 2/-1;
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
        cursor: pointer;
    }
    @media (max-width:780px){
        h1{
            font-size: 1rem;
        }
        grid-column: 2/-1;
        grid-row: 3/4;
    }
`
const FRBS = styled.div`
    grid-column: 4/-1 ;
    grid-row: 2/-1;
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
        cursor: pointer;
    }
    @media (max-width:780px){
        h1{
            font-size: 1rem;
        }
        grid-column: 2/-1;
        grid-row: 4/-1;
    }
`
const NXT = styled.div`
    grid-column: 3/4 ;
    grid-row: 2/-1;
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
        cursor: pointer;
    }
    
    @media (max-width:780px){
        h1{
            font-size: 1rem;
        }
        grid-column: 1/2;
        grid-row: 4/-1;
    }
`



function Technologies() {
    return (
        <Container id="tech" nopadding >
            <Title>
                <Puntos />
                {/* <h1>Technologies<span>.</span></h1> */}
                <h1>Tecnologías<span>.</span></h1>
            </Title>
            <ContentImg> 
            <ImageDiv >
                <div>
                </div>
            </ImageDiv> 
            <MessageDiv>
                <Message>
                {/* <p>
                     Here are a few technologies I’ve been working with recently.
                </p>  */}
                <p>
                     Estas son algunas tecnologías con las que estuve trabajando recientemente.
                </p> 
                </Message>    
            </MessageDiv>    
            </ ContentImg> 
            <Content>
            <Html>
                <SiHtml5
                size={'4rem'} 
                />
                <h1>HTML 5</h1>
            </Html>
            <Css>
                <SiCss3 size={'4rem'}   />
                <h1>CSS</h1>
            </Css>
            <JS>
                <SiJavascript size={'4rem'}  />
                <h1>JavaScript</h1>
            </JS>
            <RJS>
                <SiReact size={'4rem'}   />
                <h1>React JS</h1>
            </RJS>
            <SC>
                <SiStyledcomponents size={"4rem"} />
                <h1>Styled Components</h1>
            </SC>
            <Material>
                <SiMaterialui size={"4rem"} />
                <h1>MaterialUi</h1>
            </Material>
            <NXT>
                <SiNextdotjs size={'4rem'}  />
                <h1>Next JS</h1>
            </NXT>
            <FRBS>
                <SiFirebase size={'4rem'}  />
                <h1>Firebase</h1>
            </FRBS>
            </Content>
        </Container>
    )
}

export default Technologies
