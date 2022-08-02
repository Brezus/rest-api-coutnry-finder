import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import CDetails2 from "./CDetails2";

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


export default function CountryDetails() {
    const [cData, setCData] = useState([])
    const {countryName} = useParams()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryName}`)
        .then(res => res.json())
        .then(data => {
            setCData(data[0])
        })
    
    }, [])

    const borders = cData.borders && cData.borders.map((border, i) => <Link key={i} to={`/border-country/${border}`}>{border}</Link>)
    const languages = cData.languages && Object.values(cData.languages).join(', ')
    const currency = cData.currencies && Object.values(cData.currencies)[0].name
    const flagDpStyles = {
        backgroundImage: `url(${cData.flags && cData.flags.svg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '100%'
    }

    const nativeName = cData.name && Object.values(cData.name.nativeName)[0].official
    const population = cData.population && cData.population.toString()
    const topLevelDomain = cData.tld && cData.tld[0]
    return(
        <ArticleCont>
            
            <button><FontAwesomeIcon icon={faArrowLeftLong} /> Back</button>
            <div style={flagDpStyles}></div>
            <main>
                <h2>{cData.name && cData.name.common}</h2>
                <ul>
                    <li>Native Name: {nativeName}</li>
                    <li>Population: {population}</li>
                    <li>Region: {cData.region}</li>
                    <li>Sub Region: {cData.subregion}</li>
                    <li>Capital: {cData.capital}</li>
                </ul>
                <ul>
                    <li>Top Level Domain: {topLevelDomain}</li>
                    <li>Currencies: {currency}</li>
                    <li>Languages: {languages}</li>
                </ul>
                <h2>Border Countries:</h2>
                <div style={{display: 'flex'}}>
                    {borders ? borders: 'No borders'}
                </div>
            </main>
        </ArticleCont>
        )
        }
