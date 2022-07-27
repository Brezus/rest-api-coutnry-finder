import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import useToggle from "../hooks/useToggle";
import styled from 'styled-components'

const NavCont = styled.nav`
    width: 100%;
    padding: 3.5rem 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Div = styled.div`
    width: 90%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
`

const ThemeCont = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
`

export default function Nav() {
    const [darkmode, setDarkmode] = useToggle(false)
    const themeDiv = <ThemeCont><FontAwesomeIcon onClick={setDarkmode} icon={darkmode ? faSun : faMoon} /><p>Dark Mode</p></ThemeCont>
    return (
        <NavCont>
            <Div>
                <h1 className="nav-title">Where in the world?</h1>
                {themeDiv}
            </Div>
        </NavCont>
    )
}