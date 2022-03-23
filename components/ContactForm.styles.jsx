import styled from "styled-components";

export const ContentContact = styled.div`
width:100%;
height:90%;
display: grid;
padding-top:1rem;
grid-gap: 2rem ; 
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
@media (max-width:680px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
}
`
export const ContactImage = styled.div`
    grid-column: 1/2 ;
    height:85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width:680px){
        height:100%;
        grid-column: 1/-1 ;
        grid-row: 1/3;
    }
`
export const FormContact = styled.form`
    grid-column: 2/-1;
    grid-row:1/-1;
    width:100%;
    height:85%;
    display: grid;
    grid-gap: 25px ;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr) ;
    @media (max-width:680px){
        grid-template-rows: repeat(6, 1fr) ; 
        grid-column: 1/-1;
        grid-row: 3/-1 ;
        height: 100%;
    }
    
`

export const InputName = styled.input`
    width: 100% ;
    background-color: #eee;
    border-radius: 5px;
    grid-column: 1/2 ;
    grid-row: 1/2;
    border: none;
    background-color: #eee ;
    outline:none;
    font-size:0.8rem;
    font-weight: 600;
    padding-left:15px;
    box-shadow: 0 0 5px 5px rgba(0,0,0, 0.07);
    @media (max-width:680px){
        grid-column: 1/-1;
        grid-row:1/2;
        font-size: 16px;
    }
`

export const InputEmail = styled.input`
    width: 100% ;
    background-color: #eee;
    border-radius: 5px;
    grid-column: 2/3 ;
    grid-row: 1/2;
    border: none;
    background-color: #eee ;
    outline:none;
    font-size:0.8rem;
    font-weight: 600;
    padding-left: 15px ;
    box-shadow: 0 0 5px 5px rgba(0,0,0, 0.07);
    @media (max-width:680px){
        grid-column: 1/-1;
        grid-row:2/3;
        font-size: 16px;
    }
`

export const InputSubject = styled.input`
    width: 100% ;
    background-color: #eee;
    border-radius: 5px;
    grid-column: 1/3 ;
    grid-row: 2/3;
    border: none;
    background-color: #eee ;
    outline:none;
    font-size:0.8rem;
    font-weight: 600;
    padding-left: 15px ;
    box-shadow: 0 0 5px 5px rgba(0,0,0, 0.07);
    @media (max-width:680px){
        grid-column: 1/-1;
        grid-row:3/4;
        font-size: 16px;
    }
`

export const InputText = styled.textarea`
    width: 100% ;
    background-color: #eee;
    border-radius: 5px;
    grid-column: 1/3 ;
    grid-row: 3/5;
    border: none;
    background-color: #eee ;
    outline:none;
    font-size:0.8rem;
    font-weight: 600;
    padding: 15px 0 0 15px;
    resize: none;
    box-shadow: 0 0 5px 5px rgba(0,0,0, 0.07);
    @media (max-width:680px){
        grid-column: 1/-1;
        grid-row:4/6;
        font-size: 16px;
    }
`

export const Button= styled.input`
    background-color:transparent;
    font-weight: 600;
    width:60%;
    border-radius:2px;
    color: #ffc340;
    border: 2.5px #ffc340 solid;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover{
        background-color: #ffc340;
        color:#454546;
    }
    @media (max-width:680px){
        width: 80%;
    }
`
export const SocialMediaMenu = styled.div`
display: block;
  transition: all 0.3s ease-in;
  a:hover{
      color:#ffc340 ;
  }
`