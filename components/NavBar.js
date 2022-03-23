import React, { useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {BsPersonBadge, BsJournalCode, BsBricks,BsChevronDown} from 'react-icons/bs';
import { Nav, Logo, Hamburguer, Menu, MenuLink, DropDownMenu, DropDownHeader, DropDownMenuContent } from './NavBar.styles';


function NavBar({setLanguage, language}) {
    
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
            {/* <BsPersonBadge style={{color: '#ffc340'}}  size={"1.3rem"} />   */}
            {language == 'english' ? 'About me' : 'Sobre mi ' }        
            </MenuLink>
            </Link>
            <Link href="#projects" passHref >
            <MenuLink onClick={() => (setIsOpen(false)) } > 
            {/* <BsBricks style={{color: '#ffc340'}}  size={"1.3rem"} />   */}
            {/* Proyects */}
            {language =="english" ? 'Projects' : 'Proyectos'}
            </MenuLink>
            </Link>
            <Link href="#templates" passHref >
            <MenuLink onClick={() => (setIsOpen(false)) } > 
            {language == "english" ? 'Templates' : 'Plantillas'}
            </MenuLink>
            </Link>
            <Link href="#tech" passHref >
            <MenuLink onClick={() => (setIsOpen(false)) } > 
            {/* <BsJournalCode style={{color: '#ffc340'}}  size={"1.3rem"} />   */}
            {language == "english" ? 'Technologies' : 'Tecnologías'}
            </MenuLink>
            </Link>
            
        </Menu>
        {/* <DropDownMenu>
            <DropDownHeader> Language <BsChevronDown /> </DropDownHeader>
            <DropDownMenuContent className="DropDownMenuContent" >
            <button onClick={() => setLanguage('english')}>English</button>
            <button onClick={() => setLanguage('spanish')} >Spanish</button>
            </DropDownMenuContent>
        </DropDownMenu> */}
        </Nav>        
    )
}


export default NavBar
