import styled from 'styled-components'

export const Nav = styled.div`
margin-top: 0px;
width:100%;
padding: 1rem 4rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap:wrap;
z-index:3;                                            
max-width: 1440px;
@media (max-width:800px){
    padding:0 2.5rem;
}
`

export const Logo = styled.a`
padding: 1rem 0;
font-weight: 600;
text-decoration: none;
font-size: 2.5rem;

span{
    font-weight:600;
    color: #ffc340;
    font-size: 2.5rem;
}

@media (max-width:875px){
    font-size: 2rem;
}
`
export const Hamburguer = styled.div`
cursor:pointer;
display:none;  
transition: all 0.5s ease-in;  
@media (max-width:875px){
    display: contents;
}
`

export const Menu = styled.div`
/* margin-right:7em; */
margin-right:0;
max-width:700px;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
@media (max-width:875px){
    position: absolute;
    width: 100%;
    height: 225px ;
    flex-direction:column;
    justify-content:center;
    top:70px;
    left:${({isOpen}) => (isOpen? "0" : "-100%" )};
    transition: 0.5s all ease-in;
    z-index:100;
    background-color:#454546;
}
`
export const MenuLink = styled.div`
padding: 1rem 1rem ;
font-weight: 600;
cursor: pointer;
text-decoration: none;
color: #eee;
transition: all 0.1s ease-in;
font-size: 1.3rem;
&::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #ffc340;
    transition: width .3s;
}
&:hover::after{
    width: 100%;
}
&:hover{
    color: #ffc340;
    cursor:pointer;
}
@media (max-width:875px){
    font-size: 1rem;
}

`

export const DropDownMenu = styled.div`
position: absolute;
top: 1.8em;
right: 4em;
display: inline-block;
font-size: 1rem;
@media (max-width:875px){
    top: 1em;
    right: 5em;
}
`
export const DropDownHeader = styled.div`
    padding: 1em 0  0 0;
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    gap:10px;
    cursor:pointer;
    font-weight:500;
`

export const DropDownMenuContent = styled.div`
  width:100%;
  position:absolute;
  display:none;
  flex-direction:column;
  flex-wrap:wrap;
  gap:5px;
  background-color:#454546 ;
    z-index:4;
    border: 1px solid #eee;
    border-top:none;
    ${DropDownMenu}:hover &{
        display:flex;
    }
    button{
        style:none;
        cursor:pointer;
    border:none;
    background-color: #454546 ;
    color: #eee ;
    font-size:1rem;
}
button:hover{
    color: #ffc340 ;
}
`