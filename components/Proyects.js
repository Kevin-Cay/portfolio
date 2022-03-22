import styled from "styled-components"
import Image from 'next/image';
import {BsGithub} from 'react-icons/bs';
import{BiLinkExternal} from 'react-icons/bi'
import { Container, Title, Puntos } from "./global.styles";
import { ProyectContent, ProyectDiv, ProyectImg, ProyectDescription, ProyectTitle, DescriptionCard, TechDescription, ProyectLinks, ProyectLeftImg,  ProyectLeftDescription, ProyectLeftTitle,  DescriptionCardLeft, TechLeftDescription, ProyectLeftLinks } from "./Proyects.styles";

function Proyects({language}) {
    return (
        <Container id="proyects" 
        nopadding 
        mTop="3em"
        height="auto"  >
            <Title>
                <Puntos />
                <h1>{language == "english" ? 'Proyects': 'Proyectos'}<span>.</span></h1>
                {/* <h1>Proyects<span>.</span></h1> */}
            </Title>
            <ProyectContent>
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
                        {
                            language == "english" ? 
                            (<>
                            <p>A good app to create your personal collection of <span>notes.</span> </p>
                            <p>
                                Just login with you Google Account and enjoy a personal section to write different notes as much as you can. You can use this app wherever you are because it is connected with Firebase’s Realtime Database.
                            </p>
                            <p>
                            It’s free for you 🙂.
                            </p>
                            </>)
                            :
                            (<><p>Una buena app para crear tu propia colección de <span>notas.</span> </p>
                            <p>
                            Solo nocesitas tu cuenta de google para poder crear una nota en cualquier lugar, 
                            esta aplicación está creada con Firebase, Google Authentication y React JS.
                            </p>
                            <p>
                            Y es totalmente gratis para ti 🙂.
                            </p></>
                            )
                        }
                        
                        <TechDescription>
                            <p>React JS</p>
                            <p>React Icons</p> 
                            <p>Firebase</p> 
                        </TechDescription>
                    </DescriptionCard>
                    <ProyectLinksElement 
                    side="right" 
                    links={['https://github.com/Kevin-Cay/notes-app', 'https://kevin-cay.github.io/notes-app/' ]} 
                    iconNames={['BsGithub', 'BiLinkExternal' ]} />
                </ProyectDescription>  
            </ProyectDiv> 
            <ProyectDiv>
                <ProyectLeftImg >
                    <a target="_blank" href="https://kevin-cay.github.io/buscador-imagenes/" rel="noopener noreferrer">
                    <Image 
                    src={"/searchImgApp.png"} 
                    alt="Image_Search" 
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
                        {
                            language == "english" ?(
                                <>
                                <p>This is a good app to find a lot of <span>images</span> of different themes, sometimes with a short description</p>
                                <p>Just type in a word to find a <span>collection</span> of images about it.</p>
                                <p>Build with Unsplash API. </p>
                                </>
                            )
                            :(
                                <>
                                 <p>Una manera muy fácil de encontrar cualquier <span>imagen. </span> sobre cualquier cosa y también con una breve descripción.</p>
                                <p>
                                Solo necesitas una palabra y se te mostarán muchas imagenes de manera ordenada. Es una manera simple de encontrar una buena imagen.
                                </p>
                                </>
                            )
                        }
                       
                        <TechLeftDescription>
                            <p>React JS</p>
                            <p>Unsplash API</p> 
                            <p>Formik</p> 
                        </TechLeftDescription>
                    </DescriptionCardLeft>
                    <ProyectLinksElement 
                    side="left" 
                    links={['https://github.com/Kevin-Cay/buscador-imagenes', 'https://kevin-cay.github.io/buscador-imagenes/' ]} 
                    iconNames={['BsGithub', 'BiLinkExternal' ]} />
                   
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
                        <h1>Tip Calculator<span> app.</span> </h1>
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
            </ProyectContent>
        </Container>
    )
}

const ProyectLinksElement = ({side, links, iconNames}) =>{
    links.map((el, i) =>{
        console.log(el, i)
    })
    if(side === 'left'){
        return(
            <ProyectLeftLinks>
                {links.map((el, i) =>{
                    return(
                        <a 
                        href={el} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        key={i}
                        title={el}
                        >
                        {iconNames[i] === 'BsGithub' ? <BsGithub size={'2rem'} style={{marginRight: "1rem"}} /> : <BiLinkExternal size={'2rem'} />}
                        </a>
                    )
                })}
            </ProyectLeftLinks>
        )
    }else{
        return (
            <ProyectLinks>
            {
                links.map((el, i) =>{
                    return(
                        <a 
                        href={el} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        key={i}
                        title={el}
                        >
                        {iconNames[i] === 'BsGithub' ? <BsGithub size={'2rem'} style={{marginRight: "1rem"}} /> : <BiLinkExternal size={'2rem'} />}
                        </a>
                    )
                })
            }
       
        </ProyectLinks>   
        )
    }
    
}

export default Proyects
