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
                    <a target="_blank" href="https://kevin-cay.github.io/nasa-app-react/" rel="noopener noreferrer">
                    <Image 
                    src={"/nasaApp.png"} 
                    alt="nasaAppScreenshot" 
                    layout="fill"  
                    objectFit="contain" 
                    />
                    </a>
                </ProyectImg> 
                <ProyectDescription>
                    <ProyectTitle>
                        <h1>NASA App<span>.</span> </h1>
                    </ProyectTitle>
                    <DescriptionCard>
                        {
                            language == "english" ?(<>
                            <p>In this app you can view information about <span>NASA.</span></p>
                            <p>
                                This app will show you the <span>pic of the day </span> with a short description, from NASA API.  You can also see a collection of the latest photos taken by different <span>rovers </span> ( Curiosity and Opportunity ).
                            </p>
                            <p>Take a look  🚀. </p>
                            </>)
                            :
                            (<>
                            <p>En esta aplicación podrás ver información de la <span>NASA </span> gracias a la API que ellos proveen. </p>
                            <p>Podrás ver la foto del día con una pequeña descripción</p>
                            <p>También podras ver una pequeña colección de las últimas fotos tomasdas por diferentes rovers (Curiosity y Opportunity)</p>
                            </>)
                        }
                        
                        <TechDescription>
                            <p>ReactJS</p>
                            <p>JavaScript</p>
                            <p>NASA API</p> 
                        </TechDescription>
                    </DescriptionCard>
                    <ProyectLinksElement 
                    side="right" 
                    links={['https://github.com/Kevin-Cay/nasa-app-react.git', 'https://kevin-cay.github.io/nasa-app-react/' ]} 
                    iconNames={['BsGithub', 'BiLinkExternal' ]} />
                   
                </ProyectDescription>  
            </ProyectDiv> 
            <ProyectDiv>
                <ProyectLeftImg >
                    <a target="_blank" href="https://kevin-cay.github.io/calculadora-propina/" rel="noopener noreferrer">
                    <Image 
                    src={"/tipCalculator.png"} 
                    alt="TipCalculator" 
                    layout="fill"  
                    objectFit="contain" 
                    />
                    </a>
                </ProyectLeftImg> 
                <ProyectLeftDescription>
                    <ProyectLeftTitle>
                        <h1>Tip Calculator<span>.</span> </h1>
                    </ProyectLeftTitle>
                    <DescriptionCardLeft>
                        {
                            language == "english" ?(
                                <><p>An app to split the bill among your <span>friends.</span></p>
                                <p>
                                    Just type in the total bill, percentage of the tip, and the number of people.
                                </p>
                                <p>
                                    The app will show you the total amount of the bill, the tip per person, and the amount per person.
                                </p>
                                 </>
                                ):(
                                <>
                                <p>Una aplicación que te ayudará a dividir la cuenta con tu grupo de <span>amigos. </span></p>
                                <p>
                                Solo necesitarás el total, el porcentaje de la propina y el número de personas.
                                </p>
                                <p>El valor de la moneda por defecto es el Quetzal Guatemalateco</p>
                                </>
                            )
                        }
                        <TechLeftDescription>
                            <p>HTML</p>
                            <p>CSS</p> 
                            <p>JavaScript</p> 
                        </TechLeftDescription>
                    </DescriptionCardLeft>
                    <ProyectLinksElement 
                    side="left" 
                    links={['https://github.com/Kevin-Cay/calculadora-propina.git', 'https://kevin-cay.github.io/calculadora-propina/' ]} 
                    iconNames={['BsGithub', 'BiLinkExternal' ]} />
                </ProyectLeftDescription>  
            </ProyectDiv> 
            </ProyectContent>
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
                        {
                            language == "english" ?(
                                <><p>An app to search for <span>images, information, news or videos</span> from Google API.</p>
                                {/* <p>It is a different </p> */}
                                <p>Here you can find the best information on the internet </p>
                                </>)
                                :
                                (<>
                                <p>Una aplicación para buscar <span>imagenes, información, noticias o videos</span> de google</p>
                                <p>Aquí podrás encontrar la mejor información de todo internet.</p>
                                </>)
                        }
                        
                        <TechDescription>
                            <p>React JS</p>
                            <p>Google Api</p> 
                        </TechDescription>
                    </DescriptionCard>
                    <ProyectLinksElement 
                    side="right" 
                    links={['https://github.com/Kevin-Cay/googl-app', 'https://kevin-cay.github.io/googl-app/' ]} 
                    iconNames={['BsGithub', 'BiLinkExternal' ]} />        
                </ProyectDescription>  
            </ProyectDiv> 
            <ProyectDiv>
                <ProyectLeftImg >
                    <a target="_blank" href="https://upbeat-agnesi-d73201.netlify.app/" rel="noopener noreferrer">
                    <Image 
                    src={"/adviceGenerator.png"} 
                    alt="adviceGenerator" 
                    layout="fill"  
                    objectFit="contain" 
                    />
                    </a>
                </ProyectLeftImg> 
                <ProyectLeftDescription>
                    <ProyectLeftTitle>
                        <h1>Advice generator<span>.</span> </h1>
                    </ProyectLeftTitle>
                    <DescriptionCardLeft>
                        {
                            language == "english" ?(<>
                            <p>This app can generate an <span>advice</span> for you.</p>
                            <p>
                                Just click the button to generate a new <span>advice.</span>
                            </p>
                            <p>
                                You can use it in any device, anywhere you are.
                            </p>
                            <p>Enjoy it 😊. </p>
                            </>)
                            :
                            (<>
                            <p>Esta aplicación podrá generar un <span>consejo </span> para ti. </p>
                            <p>Con un botón podrás cambiar de consejo de manera fácil y rápida.</p>
                            <p>Puedes utilizarlo en cualquier lugar y en diferentes dispositivos.</p>
                            </>)
                        }
                        
                        <TechLeftDescription>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>API</p> 
                        </TechLeftDescription>
                    </DescriptionCardLeft>
                    <ProyectLinksElement 
                    side="left" 
                    links={['https://github.com/Kevin-Cay/advice-generator.git', 'https://upbeat-agnesi-d73201.netlify.app/' ]} 
                    iconNames={['BsGithub', 'BiLinkExternal' ]} />
                   
                </ProyectLeftDescription>  
            </ProyectDiv> 
        </Container>
    )
}

const ProyectLinksElement = ({side, links, iconNames}) =>{
    
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
