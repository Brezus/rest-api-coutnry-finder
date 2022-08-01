import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const NavCont = styled.nav`
    width: 100%;
    padding: 3.6rem 0 3.5rem;
    background-color: ${({theme}) => theme.background};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: ${({theme}) => theme.text};

    h1 {
        font-size: 1.9rem;
      }
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
                <Link to={'/'} style={{textDecoration: 'none'}}><h1>Where in the world?</h1></Link>
                {themeDiv}
            </Div>
        </NavCont>
    )
}