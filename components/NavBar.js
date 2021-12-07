import React, { useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {BsPersonBadge, BsJournalCode, BsBricks} from 'react-icons/bs';


const Nav = styled.div`
    margin-top: 0px;
    width:100%;
    padding: 1rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    z-index:99;                                            
    max-width: 1440px;
    @media (max-width:800px){
        padding:0 2.5rem;
    }

    `
const Logo = styled.a`
    padding: 1rem 0;
    font-weight: 600;
    text-decoration: none;
    font-size: 2.5rem;

    span{
        font-weight:600;
        color: #ffc340;
        font-size: 2.5rem;
    }

    @media (max-width:800px){
        font-size: 2rem;
    }


`
const Hamburguer = styled.div`
    cursor:pointer;
    display:none;    
    @media (max-width:800px){
        display: contents;
    }

`
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    @media (max-width:800px){
        position: absolute;
        width: 100%;
        height: 225px ;
        flex-direction:column;
        top:70px;
        left:${({isOpen}) => (isOpen? "0" : "-100%" )};
        transition: 0.5s all ease-in;
        z-index:100;
        background-color:#454546;
    }
`


const MenuLink = styled.div`
    padding: 1rem 2rem ;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: white;
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
    @media (max-width:800px){
        font-size: 1rem;
    }

`

function NavBar() {
    
const [isOpen, setIsOpen] = useState(false)

const handleChange = ()=>{
    setIsOpen(!isOpen);
}    
    return (
        <Nav>
        <Logo href="/">
            KC<span>.</span>    
        </Logo>    
            <Hamburguer>
            {isOpen? <AiOutlineClose 
            size={"2rem"} 
            onClick={handleChange} 
            style={{color:'#ffc340', transition: 'transition: all 0.3s ease-in'}} /> :
            <AiOutlineMenu 
            size={"2rem"} 
            onClick={handleChange} 
            style={{color:'#ffc340', transition: 'transition: all 0.3s ease-in'}} />}
            </Hamburguer>
        
        
        <Menu isOpen={isOpen} > 
            <Link href="#about" passHref >
            <MenuLink 
            onClick={() => (setIsOpen(false)) } > 
            <BsPersonBadge style={{color: '#ffc340'}}  size={"1.3rem"} />  
            {/* About  */}
            Sobre mi 
            </MenuLink>
            </Link>
            <Link href="#proyects" passHref >
            <MenuLink onClick={() => (setIsOpen(false)) } > 
            <BsBricks style={{color: '#ffc340'}}  size={"1.3rem"} />  
            {/* Proyects */}
            Proyectos
            </MenuLink>
            </Link>
            <Link href="#tech" passHref >
            <MenuLink onClick={() => (setIsOpen(false)) } > 
            <BsJournalCode style={{color: '#ffc340'}}  size={"1.3rem"} />  
            {/* Technologies */}
            Tecnologías
            </MenuLink>
            </Link>
        </Menu>
        </Nav>        
    )
}


export default NavBar
