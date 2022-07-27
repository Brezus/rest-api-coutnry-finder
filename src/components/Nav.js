import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import useToggle from "../hooks/useToggle";
import styled from 'styled-components'

const NavCont = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const ThemeCont = styled.div`
    display: flex;
    gap: 1em;
`

export default function Nav() {
    const [darkmode, setDarkmode] = useToggle(false)
    const themeDiv = <ThemeCont><FontAwesomeIcon onClick={setDarkmode} icon={darkmode ? faSun : faMoon} /><p>Dark Mode</p></ThemeCont>
    return (
        <NavCont>
        <h1>Where in the world?</h1>
        {themeDiv}
        </NavCont>
    )
}