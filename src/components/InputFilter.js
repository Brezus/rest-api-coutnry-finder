import React, { useState } from "react";
import useToggle from "../hooks/useToggle";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const countries = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

const HeaderCont = styled.header`
    display: flex;
    flex-direction: column;
    gap: 5em;
    width: 92%;
    margin-inline: auto;
    padding: 0rem 0 3.8rem 0;
`

const InputCont = styled.div`
    position: relative;

    i {
        font-size: 3rem;
    }
`
const InputBox = styled.input`
    padding: 2.3em;
    width: 100%;
    height: 100%;
    margin-inline: auto;
    border-radius: 8px;
    border: none;
    padding-left: 9.4rem;
    padding-top: 2.4rem;
    box-shadow: ${({theme}) => theme.boxShadow};
    ::placeholder {
        opacity: .7;
        font-size: 1.5rem;
        font-weight: 600;
        color: ${({theme}) => theme.text}
    }
    background-color: ${({theme}) => theme.background};


`
const FilterCont = styled.div`
    align-self: flex-start;
    position: relative;
    width: 59%;
`
const FilterBox = styled.div`
    width: 100%;
    height: 100%;
    margin-inline: auto;
    border-radius: 8px;
    border: none;
    padding: 2em 3.1em;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 0;
    background: ${({theme}) => theme.background};

    p {
        text-align: left;
        font-size: 1.5rem;
        font-weight: 600;
    }
`

const DropDownBox = styled.div`
    position: absolute;
    content: '';
    left: 0;
    padding: 1.7em 0 2.8em 3em;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    top: 110%;
    width: ${props => props.open ? '100%' : '0'};
    height: ${props => props.open ? 'initial' : '0'};
    opacity: ${props => props.open ? '1' : '0'};
    transition: width 0.2s ease;
    overflow: hidden;
    background-color: ${({theme}) => theme.background};
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


    p {
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        text-align: left;
    }
`

const Button = styled.button`
    position: absolute;
    content: '';
    left: 9%;
    top: 50%;
    background-color: transparent;
    transform: translate(-9%, -50%);
    border: none;
    cursor: pointer;
`
const ArrowButton = styled(Button)`
    left: 90%;
    transform: translate(-87%, -50%);
    padding: .3em;
`

export default function InputFilter({handleClick, handleInput}) {
    const [open, setOpen] = useToggle(false)

    function handleFilterChange(e) {
        handleClick(e.target.innerText)
    }
    const dropDownPEl = countries.map((country, i) => <p key={i} onClick={(e) => {
        setOpen(false)
        handleFilterChange(e)
    }}>{country}</p>)
    const arrowBtnStyles = {
        transform: `${!open ? 'rotate(90deg)': ''}`,
        transition: 'transform 0.2s ease',
        fontSize: '1rem'
    }
    return (
        <HeaderCont>
                <InputCont>
                    <InputBox placeholder="Search for a country..." onChange={(e) => {
                        handleInput(e)
                    }}></InputBox>
                    <Button><FontAwesomeIcon style={{fontSize: '2rem'}} icon={faMagnifyingGlass}/></Button>
                </InputCont>
                <FilterCont>
                    <FilterBox><p>Filter by Region</p></FilterBox>
                    <ArrowButton><FontAwesomeIcon onClick={setOpen} style={arrowBtnStyles} icon={faAngleDown} /></ArrowButton>
                    <DropDownBox open={open}>
                        {dropDownPEl}
                    </DropDownBox>
                </FilterCont>
            </HeaderCont>
    )
}