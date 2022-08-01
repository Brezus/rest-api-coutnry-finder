import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import CountryGridItem from "./CountryGridItem";
import styled from 'styled-components'
import InputFilter from "./InputFilter";

const MainCont = styled.main`
    background: ${({theme}) => theme.background}
`

const LoaderDiv = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(https://media4.giphy.com/media/eK7Nj68Yur6vRmVyqN/giphy.gif?cid=ecf05e4727jj6t2gdbjhfx7e0toy9j2aktwbuejpqjz9ovsy&rid=giphy.gif&ct=s);
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: top;
`
const url = 'https://restcountries.com/v3.1/all'

export default function Main() {
    const [isLoading, setIsLoading] = useState(false)
    const [fetchedData, setFetchedData] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
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
            {isLoading ? <LoaderDiv></LoaderDiv> : <MainCont className="main-cont">{gridDataComponents}</MainCont>}
        </div>
        )
}