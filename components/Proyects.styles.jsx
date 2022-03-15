import styled from 'styled-components'

export const ProyectContent =  styled.div`
    margin-top: 2em;
    width:100%;
    height: auto;   
    display:flex;
    flex-direction: column;
    align-items:center;
`
export const ProyectDiv = styled.div`
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
    height: 550px;
}
`

export const ProyectImg = styled.div`
grid-column: 1/8;
grid-row:1/-1;
width: 100%;
height: 100%;
position: relative ;
@media (max-width:599px){
    grid-column: 1/-1;
    grid-row:1/7;
}
`
export const ProyectDescription = styled.div`
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
        grid-row:5/-1;
        background-color: #666666;
        border-radius: 5px;
        box-shadow: 0 0 3px 5px rgba(0,0,0,0.025) ;
        justify-content: center;
    }
`

export const ProyectTitle = styled.div`
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
export const DescriptionCard = styled.div`
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
export const TechDescription = styled.div`
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


export const ProyectLinks = styled.div`
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
export const ProyectLeftImg = styled.div`
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
export const ProyectLeftDescription = styled.div`
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
        grid-row:5/-1;
        background-color: #666666;
        border-radius: 5px;
        box-shadow: 0 0 3px 5px rgba(0,0,0,0.025) ;
        justify-content: center;
    }
`
export const ProyectLeftTitle = styled.div`
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
export const DescriptionCardLeft = styled.div`
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
export const TechLeftDescription = styled.div`
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
export const ProyectLeftLinks = styled.div`
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