import styled from 'styled-components';
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiPhp, SiFirebase, SiNextdotjs, SiStyledcomponents, SiMaterialui} from 'react-icons/si'
import {Container, Title, Puntos} from './global.styles'
import { ContentImg, ImageDiv, MessageDiv, Message, Content, ContentGrid } from './Technologies.styles';


function Technologies({language}) {
    
    return (

        <Container 
        id="tech" 
        nopadding  
        mTop='2em'
        height="700px"
        height780="1000px"
        height480="900px"
        >
            <Title>
                <Puntos />
                {
                    language === 'english' ?
                    (<>
                        <h1>Technologies<span>.</span></h1>
                    </>)
                    :
                    (<>
                    <h1>Tecnologías<span>.</span></h1>
                    </>)
                }
            </Title>
            <ContentImg> 
            <ImageDiv >
                <div>
                </div>
            </ImageDiv> 
            <MessageDiv>
                <Message>
                    {
                        language === 'english' ?
                        (<> 
                        <p>
                            These are some of the technologies I’ve been working with recently.
                        </p> 
                        </>)
                        :
                        (<>
                        <p>
                            Estas son algunas tecnologías con las que estuve trabajando recientemente.
                        </p> 
                        </>)
                        
                    }
                </Message>    
            </MessageDiv>    
            </ ContentImg> 
            <Content>
                <ContentGrid>
                <SiHtml5
                size={'4rem'} 
                />
                <h1>HTML 5</h1>
                </ContentGrid>
                <ContentGrid>
                <SiCss3 size={'4rem'}   />
                <h1>CSS</h1>
                </ContentGrid>
                <ContentGrid>
                <SiJavascript size={'4rem'}  />
                <h1>JavaScript</h1>
                </ContentGrid>
                <ContentGrid>
                <SiReact size={'4rem'}   />
                <h1>React JS</h1>
                </ContentGrid>
                <ContentGrid>
                <SiStyledcomponents size={"4rem"} />
                <h1>Styled Components</h1>
                </ContentGrid>
                <ContentGrid>
                <SiPhp size={"4rem"} />
                <h1>PHP</h1>
                </ContentGrid>
                {/* <ContentGrid>
                <SiMaterialui size={"4rem"} />
                <h1>MaterialUi</h1>
                </ContentGrid> */}
                <ContentGrid>
                <SiNextdotjs size={'4rem'}  />
                <h1>Next JS</h1>
                </ContentGrid>
                <ContentGrid>
                <SiFirebase size={'4rem'}  />
                <h1>Firebase</h1>

                </ContentGrid>
            </Content>
        </Container>
    )
}

export default Technologies
