
import Typed from 'react-typed';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import { Content, TypedText, SocialMediaMenu, ContainerHeader } from './Header.styles';
import { ImageContainerAvatar, H1, Button } from './global.styles';


function Header({language}) {
    return (
        <ContainerHeader id="header" nopadding >
            <Content>
                <ImageContainerAvatar width={'8em'} height={'8em'} />
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
                    rel="noopener noreferrer" passHref  >
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
                    <Button maxWidth={'200px'} maxHeight={'50px'} href="#contact" passHrefs >
                        {language == 'english' ? 'Hire me' : 'Salúdame' }
                    </Button>
            </Content>
        </ContainerHeader>
    )
}

export default Header
