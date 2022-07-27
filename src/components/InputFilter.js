import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
    padding-left: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const FilterCont = styled.div`
    align-self: flex-start;
    position: relative;
    width: 59%;
`
const FilterBox = styled(InputBox)`
    margin: 0;
    padding-left: 0;
`

const Button = styled.button`
    position: absolute;
    content: '';
    left: 9%;
    top: 50%;
    background-color: transparent;
    transform: translate(-10%, -50%);
    border: none;
    cursor: pointer;
`
const ArrowButton = styled(Button)`
    left: 87%;
    background-color: black;
    height: 10px;
    width: 10px;
`
export default function InputFilter() {
    return (
        <HeaderCont>
                <InputCont>
                    <InputBox placeholder="bruh"></InputBox>
                    <Button><FontAwesomeIcon style={{fontSize: '2rem'}} icon={faMagnifyingGlass}/></Button>
                </InputCont>
                <FilterCont>
                    <FilterBox />
                    <ArrowButton />
                </FilterCont>
            </HeaderCont>
    )
}