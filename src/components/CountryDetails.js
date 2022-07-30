import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function CountryDetails(props) {
    const {countryName} = useParams()
    const countriesData = useLocation()
    const {countriesInfo} = countriesData.state
    console.log(countriesInfo)
    return(<p>hello there we are at {countryName}</p>)
}