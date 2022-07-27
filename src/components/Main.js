import React, { useEffect, useState } from "react";
import axios from 'axios'
import { nanoid } from 'nanoid'
import CountryGridItem from "./CountryGridItem";
import styled from 'styled-components'
import InputFilter from "./InputFilter";

const WrapperDiv = styled.div`
    background-color: hsl(0, 0%, 98%);
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
            <InputFilter/>
            <MainCont>{painandsadness}</MainCont>
        </WrapperDiv>
        )
}