import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import CountryGridItem from "./CountryGridItem";
import styled from 'styled-components'
import InputFilter from "./InputFilter";
import useWindowSize from '../hooks/useWindowSize'

const MainCont = styled.main`
    background: ${({theme}) => theme.background}
`
const url = 'https://restcountries.com/v3.1/all'

export default function Main() {
    const {width} = useWindowSize()
    const [fetchedData, setFetchedData] = useState([])
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

      const gridDataComponents = fetchedData && fetchedData.map(item => <CountryGridItem data={item} key={nanoid()} />)

    return(
        <div>
            <InputFilter handleClick={handleRegionChange} handleInput={handleInput}/>
            <MainCont className="main-cont">{gridDataComponents}</MainCont>
        </div>
        )
}