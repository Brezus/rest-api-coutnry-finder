import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Details from "./Details"

export default function CountryDetails() {
  const [cData, setCData] = useState({})
  const { countryName } = useParams()
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName.trim()}`)
      .then((res) => res.json())
      .then((data) => {
        setCData(data[0])
      })
  }, [countryName])
  return <Details info={cData} />
}
