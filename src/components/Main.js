import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import CountryGridItem from "./CountryGridItem"
import styled from "styled-components"
import InputFilter from "./InputFilter"

const MainCont = styled.main`
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
  width: 91%;
  margin-inline: auto;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240.8px, 1fr));
    grid-auto-rows: auto;
    grid-row-gap: 4.6em;
    grid-column-gap: 5em;
    width: 88%;
  }
`

const LoaderDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(https://media1.giphy.com/media/itPPg72momesJtM1PZ/giphy.gif?cid=ecf05e47q1ysk5cvo0fkili8oa6th1idkrxl1337wvemnw2n&rid=giphy.gif&ct=s);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top;
`
const url = "https://restcountries.com/v3.1/all"

export default function Main() {
  const [isLoading, setIsLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState([])
  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setFetchedData(
          data.map((item) => {
            return { allData: item, visible: true }
          })
        )
      })
  }, [])

  function handleRegionChange(str) {
    setFetchedData((prevData) => {
      return prevData.map((data) => {
        return data.allData.region === str
          ? { ...data, visible: true }
          : { ...data, visible: false }
      })
    })
  }

  function handleInput(e) {
    const search = e.target.value.toLowerCase()
    setFetchedData((prevData) => {
      return prevData.map((data) => {
        const commonName = data.allData.name.common.toLowerCase()
        return commonName.includes(search)
          ? { ...data, visible: true }
          : { ...data, visible: false }
      })
    })
  }

  const gridDataComponents =
    fetchedData &&
    fetchedData.map((item) => <CountryGridItem data={item} key={nanoid()} />)

  return (
    <div>
      <InputFilter handleClick={handleRegionChange} handleInput={handleInput} />
      {isLoading ? (
        <LoaderDiv></LoaderDiv>
      ) : (
        <MainCont>{gridDataComponents}</MainCont>
      )}
    </div>
  )
}
