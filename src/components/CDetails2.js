import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Details from "./Details";

export default function CDetails2() {
    const [cData, setCData] = useState({})
    const {countryCode} = useParams()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(res => res.json())
        .then(data => {
            setCData(data[0])
        })
    
    }, [])
    return(<Details info={cData} borderC={false} />)
}