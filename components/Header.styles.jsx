import styled from 'styled-components'

export const ContainerHeader = styled.section`
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


export const Content = styled.div`
    width:100%;
    height: 100%;
    min-width: 300px;
    background-color: #454546;
    opacity: 0.8;
    background-image: radial-gradient(#8c8c8c 1px, #454546 1px);
    background-size: 18px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 0;
`

export const TypedText = styled.p`
margin: 0;
font-size:1.5rem;
color:#ccc;
@media (max-width:780px){
    font-size: 1.3rem;
}
`

export const SocialMediaMenu = styled.div`
    display: block;
    transition: all 0.3s ease-in;
    a:hover{
        color:#ffc340 ;
    }
`