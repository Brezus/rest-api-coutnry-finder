import React, { useEffect, useState } from "react";
import axios from 'axios'
import { nanoid } from 'nanoid'
import CountryGridItem from "./CountryGridItem";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const WrapperDiv = styled.div`
    background-color: hsl(0, 0%, 98%);
` 
const HeaderCont = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2em;
`

const InputCont = styled.div`
    position: relative;
`
const Input = styled.input`
    padding: 1em;
    width: 90%;
    height: 100%;
    margin-inline: auto;
    border-radius: 8px;
    border: none;
    padding-left: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Button = styled.button`
    position: absolute;
    content: '';
    left: 10%;
    top: 50%;
    background-color: transparent;
    transform: translate(-10%, -50%);
    border: none;
`

const MainCont = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
`



const url = 'https://restcountries.com/v3.1/all'

export default function Main() {
    const [fetchedData, setFetchedData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFetchedData(data)
        })
      }, []);

      const painandsadness = fetchedData.map(item => <CountryGridItem data={item} key={nanoid()} />)

    return(
        <WrapperDiv>
            <HeaderCont>
                <InputCont>
                    <Input></Input>
                    <Button><FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
                </InputCont>
                <div className="filter-countries-cont">
                    <input type='text' name="country" />
                </div>
            </HeaderCont>
            <MainCont>{painandsadness}</MainCont>
        </WrapperDiv>
        )
}