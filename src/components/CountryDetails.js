import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";

export default function CountryDetails() {
    const [cData, setCData] = useState({})
    const {countryName} = useParams()
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryName}`)
        .then(res => res.json())
        .then(data => {
            setCData(data[0])
        })
    
    }, [])
    return(<Details info={cData} borderC={true}  />)
}
