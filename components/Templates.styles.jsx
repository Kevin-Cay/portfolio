import styled from 'styled-components';


export const GridTemplates = styled.div`
    margin-top: 1rem;
    width: 100%;
    height: 250px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    @media (max-width:875px){
        width: 100%;
        height: 500px;
    }
    @media (max-width:580px){
        width: 100%;
        height: 800px;
    }
`

export const GridElement = styled.a`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 3px 5px rgba(0,0,0,0.025) ;
    &:hover{
        box-shadow: 0 0 3px 5px rgba(0,0,0,0.05) ;
        transform: scale(1.025);
        transition: all 0.3s ease-in-out;
        }
`