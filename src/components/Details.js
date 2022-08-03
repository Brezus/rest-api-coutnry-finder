import React from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components'
import BackButton from "./BackButton";

const ArticleCont = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.body};
    width: 92%;
    margin-inline: auto;

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

export default function Details({info, borderC}) {
    console.log(info)
    const borders = info.borders?.map((border, i) => <Link key={i} to={borderC ? `/border-country/${border}` : `/${border}`}>{border}</Link>)
    const languages = info.languages && Object.values(info.languages).join(', ')
    const currency = info.currencies && Object.values(info.currencies)[0].name
    const nativeName = info.name && Object.values(info.name.nativeName)[0].official
    const population = info.population?.toString()
    const topLevelDomain = info.tld?.[0]
    const flagDpStyles = {
        backgroundImage: `url(${info.flags?.svg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '100%'
    }
    return (
        <ArticleCont>
            <BackButton />
            <div style={flagDpStyles}></div>
            <main>
                <h2>{info.name?.common}</h2>
                <ul>
                    <li>Native Name: {nativeName}</li>
                    <li>Population: {population}</li>
                    <li>Region: {info.region}</li>
                    <li>Sub Region: {info.subregion}</li>
                    <li>Capital: {info.capital}</li>
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
            </main></ArticleCont>
    )
}