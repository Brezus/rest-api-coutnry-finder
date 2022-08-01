import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

const ArticleCont = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.body};
    width: 92%;
    margin-inline: auto;

    button {
        display: flex;
        align-items: center;
        gap: .5em;
        color: ${({theme}) => theme.text};
        background-color: ${({theme}) => theme.background};
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: start;
        align-self: start;
    }
    ul {
        list-style: none;
        text-align: left;
        padding-left: 0;
    }
`




export default function CDetails2() {
    const [cData, setCData] = useState([])
    const {countryCode} = useParams()
    console.log(countryCode)
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(res => res.json())
        .then(data => {
            setCData(data[0])
        })
    }, [])
    {cData && console.log(cData)}
    const borders = cData.borders && cData.borders.map(border => <Link to={`/${border}`}>{border}</Link>)
    console.log(borders)
    return(
        <ArticleCont>
            <button><FontAwesomeIcon icon={faArrowLeftLong} /> Back</button>
            <p>hi im carl</p>
            {borders && borders}

        </ArticleCont>
    )
}