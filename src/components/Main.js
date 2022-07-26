import React, { useEffect, useState } from "react";
import axios from 'axios'
import { nanoid } from 'nanoid'
import CountryGridItem from "./CountryGridItem";
import styled from 'styled-components'

const MainCont = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
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
        <>
            <header>
                <div className="input-cont">
                    <input type='text' name="country" />
                    <button></button>
                </div>
                <div className="filter-countries-cont">
                    <input type='text' name="country" />
                </div>
            </header>
            <MainCont>{painandsadness}</MainCont>
        </>
        )
}