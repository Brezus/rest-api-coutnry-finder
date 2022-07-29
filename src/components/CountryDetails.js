import React from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails(props) {
    const {countryName} = useParams()
    return(<p>hello there we are at {countryName}</p>)
}