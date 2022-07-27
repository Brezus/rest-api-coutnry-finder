import React from "react";
import useToggle from "../hooks/useToggle";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const countries = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const HeaderCont = styled.header`
    display: flex;
    flex-direction: column;
    gap: 5em;
    width: 90%;
    margin-inline: auto;
    padding: 0rem 0 4rem 0;
`

const InputCont = styled.div`
    position: relative;
`
const InputBox = styled.input`
    padding: 2.3em;
    width: 100%;
    height: 100%;
    margin-inline: auto;
    border-radius: 8px;
    border: none;
    padding-left: 8rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const FilterCont = styled.div`
    align-self: flex-start;
    position: relative;
    width: 59%;
`
const FilterBox = styled(InputBox)`
    margin: 0;
    padding-left: 3rem;
`

const DropDownBox = styled.div`
    position: absolute;
    content: '';
    left: 0;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1em;
    top: 110%;
    width: 0px;
    height: 0px;
    transition: width 0.2s ease;
    overflow: hidden;
    background-color: white;
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
    left: 87%;
    transform: translate(-87%, -50%);
    
`

export default function InputFilter() {
    const [open, setOpen] = useToggle(false)
    const dropDownPEl = countries.map((country) => <p>{country}</p>)
    const arrowBtnStyles = {
        transform: `${!open ? 'rotate(90deg)': ''}`,
        transition: 'transform 0.2s ease',
        fontSize: '1rem'
    }
    return (
        <HeaderCont>
                <InputCont>
                    <InputBox placeholder="Search for a country..."></InputBox>
                    <Button><FontAwesomeIcon style={{fontSize: '2rem'}} icon={faMagnifyingGlass}/></Button>
                </InputCont>
                <FilterCont>
                    <FilterBox placeholder="Filter by Region" />
                    <ArrowButton><FontAwesomeIcon onClick={setOpen} style={arrowBtnStyles} icon={faAngleDown} /></ArrowButton>
                    <DropDownBox style={{width: `${open ? '100%' : '0'}`, height: `${open ? 'initial' : ''}`}}>
                        {dropDownPEl}
                    </DropDownBox>
                </FilterCont>
            </HeaderCont>
    )
}