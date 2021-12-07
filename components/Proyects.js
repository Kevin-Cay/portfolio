import styled from "styled-components"
import Image from 'next/image';
import {BsGithub} from 'react-icons/bs';
import{BiLinkExternal} from 'react-icons/bi'

const Container = styled.section`
    margin-top: 2em;
    width: 100%;
    height: auto ;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 4em 0 4em ;
    @media (max-width:780px){
        height: auto ;
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
    height: auto;   
    display:flex;
    flex-direction: column;
    align-items:center;
`

const ProyectDiv = styled.div`
    width: 100%;
    height: 375px;
    max-width:1100px;
    margin-bottom:3em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    @media (max-width:599px){
        height: 550px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(12, 1fr) ;
    }
    @media (max-width:479px){
        margin-bottom:1.5em;
        height: 500px;
    }
`

const ProyectImg = styled.div`
    grid-column: 1/8;
    grid-row:1/-1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    position: relative ;
    @media (max-width:599px){
        grid-column: 1/-1;
        grid-row:1/7;
    }
    /* @media (max-width:479px){
        grid-row:1/3;
    } */
`
const ProyectDescription = styled.div`
    grid-column: 7/-1;
    grid-row:1/-1;
    width: 100%;
    z-index:20;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* border: 1px #666666 solid; */
    @media (max-width:599px){
        padding: 1em ;
        height:100%;
        grid-column: 1/-1;
        grid-row:6/-1;
        background-color: #666666;
        border-radius: 5px;
        box-shadow: 0 0 3px 5px rgba(0,0,0,0.025) ;
        justify-content: center;
    }
`
const ProyectTitle = styled.div`
    width: 100%;
    height: auto ;
    position: relative;
    text-align: right;
    h1{
        font-size: 2.5rem;
        margin:0px;
    }
    span{
        font-weight:600;
        color: #ffc340;
        font-size: 3rem;
    }
    @media (max-width:780px){
       h1{
           font-size: 2rem;
       }
        
    }
    @media (max-width:599px){
        text-align: left;
        h1{
           font-size: 1.8rem;
       }
    }
`

const DescriptionCard = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: #666666;
    border-radius: 5px;
    box-shadow: 0 0 3px 5px rgba(0,0,0,0.05) ;
    padding: 2em;
    display: flex;
    flex-direction: column;
    line-height: 150%;
    p{
        margin:0;
        text-align: right;
    }
    span{
        font-weight:600;
        color: #ffc340;
    }
    @media (max-width:599px){
    box-shadow: none;
    padding: 0px;
    p{
        margin:0;
        text-align: left;
    }
    }
    
`
const TechDescription = styled.div`
    margin-top:15px;
    width:100%;
    display: flex;
    justify-content: flex-end;
    p{
        margin: 0;
        font-size: 1rem;
        font-weight:600;
        margin-left:20px;
        color: #ffc340;
    }
    @media (max-width:800px){
        p{
            font-size: 0.8rem;
        font-weight:600;
        margin-left:10px;
        }
    }
    @media (max-width:599px){
        justify-content: flex-start;
        margin-bottom:10px;
    p{
        margin:0;
        margin-right: 10px;
        font-size: 0.8rem;
        text-align: left;
    }
    }
`


const ProyectLinks = styled.div`
    width: 100%;
    height: auto;
    display: flex; 
    justify-content: flex-end;
    a:hover{
        color: #ffc340;
    }
    @media (max-width:599px){
    justify-content: flex-start;
    }

`
const ProyectLeftImg = styled.div`
    grid-column: 6/-1;
    grid-row:1/-1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    position: relative ;
    @media (max-width:599px){
        grid-column: 1/-1;
        grid-row:1/7;
    }
`
const ProyectLeftDescription = styled.div`
    grid-column: 1/7;
    grid-row:1/-1;
    width: 100%;
    z-index:20;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* border: 1px #666666 solid; */
    @media (max-width:599px){
        padding: 1em ;
        height:100%;
        grid-column: 1/-1;
        grid-row:6/-1;
        background-color: #666666;
        border-radius: 5px;
        box-shadow: 0 0 3px 5px rgba(0,0,0,0.025) ;
        justify-content: center;
    }
`
const ProyectLeftTitle = styled.div`
    width: 100%;
    height: auto ;
    position: relative;
    text-align: left;
    h1{
        font-size: 2.5rem;
        margin:0px;
    }
    span{
        font-weight:600;
        color: #ffc340;
        font-size: 3rem;
    }
    @media (max-width:780px){
       h1{
           font-size: 2rem;
       }
        
    }
    @media (max-width:599px){
        text-align: left;
        h1{
           font-size: 1.8rem;
       }
    }
`
const DescriptionCardLeft = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: #666666;
    border-radius: 5px;
    box-shadow: 0 0 3px 5px rgba(0,0,0,0.05) ;
    padding: 2em;
    display: flex;
    flex-direction: column;
    line-height: 150%;
    p{
        margin:0;
        text-align: left;
    }
    span{
        font-weight:600;
        color: #ffc340;
    }
    @media (max-width:599px){
    box-shadow: none;
    padding: 0px;
    p{
        margin:0;
        text-align: left;
    }
    }
    
`
const TechLeftDescription = styled.div`
    margin-top:15px;
    width:100%;
    display: flex;
    justify-content: flex-start;
    p{
        margin: 0;
        font-size: 1rem;
        font-weight:600;
        margin-right:20px;
        color: #ffc340;
    }
    @media (max-width:800px){
        p{
            font-size: 0.8rem;
        font-weight:600;
        margin-right:10px;
        }
    }
    @media (max-width:599px){
        justify-content: flex-start;
        margin-bottom:10px;
    p{
        margin:0;
        margin-right: 10px;
        font-size: 0.8rem;
        text-align: left;
    }
    }
`
const ProyectLeftLinks = styled.div`
    width: 100%;
    height: auto;
    display: flex; 
    justify-content: flex-start;
    a:hover{
        color: #ffc340;
    }
    @media (max-width:599px){
    justify-content: flex-start;
    }

`

function Proyects() {
    return (
        <Container id="proyects" >
            <Title>
                <Puntos />
                <h1>Proyectos<span>.</span></h1>
                {/* <h1>Proyects<span>.</span></h1> */}
            </Title>
            <Content>
            <ProyectDiv>
                <ProyectImg >
                    <a target="_blank" href="https://kevin-cay.github.io/notes-app/" rel="noopener noreferrer">
                    <Image 
                    src={"/notesApp.png"} 
                    alt="notesAppImg" 
                    layout="fill"  
                    objectFit="contain" 
                    />
                    </a>
                </ProyectImg> 
                <ProyectDescription>
                    <ProyectTitle>
                        <h1>Notes App<span>.</span> </h1>
                    </ProyectTitle>
                    <DescriptionCard>
                        {/* <p>A nice app to create your own collection of <span>notes.</span> </p>
                        <p>
                            Create a note wherever you are with your email or your Google Account.
                            I build this app with Google Auth and Firestore Database. 
                        </p>
                        <p>
                        And it’s free for you 🙂.
                        </p> */}
                        <p>Una buena app para crear tu propia colección de <span>notas.</span> </p>
                        <p>
                            Solo nocesitas tu cuenta de google para poder crear una nota en cualquier lugar, 
                            esta aplicación está creada con Firebase, Google Authentication y React JS.
                        </p>
                        <p>
                        Y es totalmente gratis para ti 🙂.
                        </p>
                        <TechDescription>
                            <p>React JS</p>
                            <p>React Icons</p> 
                            <p>Firebase</p> 
                        </TechDescription>
                    </DescriptionCard>
                    <ProyectLinks>
                    <a 
                    href="https://github.com/Kevin-Cay/notes-app" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BsGithub  
                    size={'2rem'} 
                    style={{marginRight: "1rem"}} 
                    />
                    </a>
                    <a 
                    href="https://kevin-cay.github.io/notes-app/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BiLinkExternal 
                    size={'2rem'} 
                    />
                    </a>
                    </ProyectLinks>
                </ProyectDescription>  
            </ProyectDiv> 
            <ProyectDiv>
                <ProyectLeftImg >
                    <a target="_blank" href="https://fb-clone-f08df.firebaseapp.com/" rel="noopener noreferrer">
                    <Image 
                    src={"/fbCloneApp.png"} 
                    alt="fbCloneApp" 
                    layout="fill"  
                    objectFit="contain" 
                    />
                    </a>
                </ProyectLeftImg> 
                <ProyectLeftDescription>
                    <ProyectLeftTitle>
                        <h1>Facebook Clone<span>.</span> </h1>
                    </ProyectLeftTitle>
                    <DescriptionCardLeft>
                        <p>Un buen <span>Clon de Facebook. </span> para poder postear lo que quieras. </p>
                        <p>
                         Puedes escribir en un muro virtual lo que quieras y también un URL de cualquier foto. 
                         Está conectada a una base de datos.
                        </p>
                        <p>
                        Accede a la aplicación con tu cuenta de Google.
                        </p>
                        <TechLeftDescription>
                            <p>React JS</p>
                            <p>Firebase</p> 
                            <p>Material UI</p> 
                        </TechLeftDescription>
                    </DescriptionCardLeft>
                    <ProyectLeftLinks>
                    <a 
                    href="https://github.com/Kevin-Cay/fb-clone" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BsGithub  
                    size={'2rem'} 
                    style={{marginRight: "1rem"}} 
                    />
                    </a>
                    <a 
                    href="https://fb-clone-f08df.firebaseapp.com/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BiLinkExternal 
                    size={'2rem'} 
                    />
                    </a>
                    </ProyectLeftLinks>
                </ProyectLeftDescription>  
            </ProyectDiv> 
            
            <ProyectDiv>
                <ProyectImg >
                    <a target="_blank" href="https://kevin-cay.github.io/googl-app/" rel="noopener noreferrer">
                    <Image 
                    src={"/googlApp.png"} 
                    alt="googlAppImg" 
                    layout="fill"  
                    objectFit="contain" 
                    />
                    </a>
                </ProyectImg> 
                <ProyectDescription>
                    <ProyectTitle>
                        <h1>Googl App<span>.</span> </h1>
                    </ProyectTitle>
                    <DescriptionCard>
                        {/* <p>In this app you can search <span>information, images, news or videos </span> 
                        about someone or something</p>
                        <p>
                            Here you can find the best information of all internet.  
                        </p>
                        <p>
                        Enjoy it! 🙂.
                        </p> */}
                        <p>En esta app podrás buscar <span>información , imágenes, noticias y vídeos </span> 
                        sobre alguien o algo.</p>
                        <p>
                           Aquí podrás encontrar cualquier coda de internet. La mejor información y de manera fácil. 
                           Está conectada direcatamente con la Api de Google. 
                        </p>
                        <p>
                        ¡Disfrútalo ! 🙂.
                        </p>
                        <TechDescription>
                            <p>React JS</p>
                            <p>Google Api</p> 
                        </TechDescription>
                    </DescriptionCard>
                    <ProyectLinks>
                    <a 
                    href="https://github.com/Kevin-Cay/googl-app" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BsGithub  
                    size={'2rem'} 
                    style={{marginRight: "1rem"}} 
                    />
                    </a>
                    <a 
                    href="https://kevin-cay.github.io/googl-app/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BiLinkExternal 
                    size={'2rem'} 
                    />
                    </a>
                    </ProyectLinks>
                </ProyectDescription>  
            </ProyectDiv> 
            <ProyectDiv>
                <ProyectLeftImg >
                    <a target="_blank" href="https://kevin-cay.github.io/buscador-imagenes/" rel="noopener noreferrer">
                    <Image 
                    src={"/searchImgApp.png"} 
                    alt="searchImgApp" 
                    layout="fill"  
                    objectFit="contain" 
                    />
                    </a>
                </ProyectLeftImg> 
                <ProyectLeftDescription>
                    <ProyectLeftTitle>
                        <h1>Image Search<span>.</span> </h1>
                    </ProyectLeftTitle>
                    <DescriptionCardLeft>
                        {/* <p>An easy way to find any <span>Image </span> about someone or something with a short description.</p>
                        <p>
                         You just need a word to find a lot of images about it. You can use this app every time.
                        </p> */}
                        <p>Una manera muy fácil de encontrar cualquier <span>imagen. </span> sobre cualquier cosa y también con una breve descripción.</p>
                        <p>
                         Solo necesitas una palabra y se te mostarán muchas imagenes de manera ordenada. Es una manera simple de encontrar una buena imagen.
                        </p>
                        <TechLeftDescription>
                            <p>React JS</p>
                            <p>CSS</p> 
                            <p>Unsplash API</p> 
                        </TechLeftDescription>
                    </DescriptionCardLeft>
                    <ProyectLeftLinks>
                    <a 
                    href="https://github.com/Kevin-Cay/buscador-imagenes" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BsGithub  
                    size={'2rem'} 
                    style={{marginRight: "1rem"}} 
                    />
                    </a>
                    <a 
                    href="https://kevin-cay.github.io/buscador-imagenes/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BiLinkExternal 
                    size={'2rem'} 
                    />
                    </a>
                    </ProyectLeftLinks>
                </ProyectLeftDescription>  
            </ProyectDiv> 
            </Content>
        </Container>
    )
}

export default Proyects
