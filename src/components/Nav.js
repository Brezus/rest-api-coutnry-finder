import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const NavCont = styled.nav`
    width: 100%;
    padding: 2.2rem 0 2.2rem;
    background-color: ${({theme}) => theme.body};
    
    box-shadow: ${({theme}) => theme.boxShadow};

    h1 {
        font-size: 1rem;
        font-weight: 800;
      }
`

const StyledLink = styled(Link)`
      text-decoration: none;
      color: ${({theme}) => theme.text}
`
const Div = styled.div`
    width: 92%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
`

const ThemeCont = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
`

export default function Nav({toggleTheme, darkMode}) {
    const themeDiv = <ThemeCont><FontAwesomeIcon onClick={toggleTheme} icon={darkMode ? faSun : faMoon} /><p className="nav-para">Dark Mode</p></ThemeCont>
    return (
        <NavCont>
            <Div>
                <StyledLink to={'/'} style={{textDecoration: 'none'}}><h1>Where in the world?</h1></StyledLink>
                {themeDiv}
            </Div>
        </NavCont>
    )
}