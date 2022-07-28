import React, { useEffect, useState } from "react";
import axios from 'axios'
import { nanoid } from 'nanoid'
import CountryGridItem from "./CountryGridItem";
import styled from 'styled-components'
import InputFilter from "./InputFilter";

const MainCont = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
`
const url = 'https://restcountries.com/v3.1/all'

export default function Main() {
    const [fetchedData, setFetchedData] = useState([])
    // const backupData = fetchedData.map(item => {
    //     return {allData: item, region: item.region, name: item.name.common, population: item.population, capital: item.capital }
    // })
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFetchedData(data.map(item => {
                return {allData: item, visible: true }
            }))
        })
      }, []);

      function handleRegionChange(str) {
          setFetchedData(prevData => {
            return prevData.map(data => {
                return data.allData.region === str ? {...data, visible: true} : {...data, visible: false}
            })
            })
      }

      function handleInput(e) {
        const search = e.target.value.toLowerCase()
        setFetchedData(prevData => {
            return prevData.map(data => {
                const commonName = data.allData.name.common.toLowerCase()
                return commonName.includes(search) ? {...data, visible: true} : {...data, visible: false}
            })
        })
      }

      const gridDataComponents = fetchedData.map(item => <CountryGridItem data={item} key={nanoid()} />)

    return(
        <div>
            <InputFilter handleClick={handleRegionChange} handleInput={handleInput}/>
            <MainCont>{gridDataComponents}</MainCont>
        </div>
        )
}