import React from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components'
import BackButton from "./BackButton";

const ArticleCont = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 92%;
    margin-inline: auto;
    padding-bottom: 6em;

    main {
        display: flex;
        flex-direction: column;
        align-items: start;
        align-self: start;
        gap: 1em;

        h2 {
            font-size: 1.6rem;
        }
    }
    ul {
        list-style: none;
        text-align: left;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: .8em;
        font-weight: 800;
    } 
    ul + ul {
        margin-bottom: 2em;
    }
    
`

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: .5em 1em;
    gap: .5em;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.body};
    box-shadow: ${({theme}) => theme.boxShadow};
    cursor: pointer;
    border-radius: 2px;
`
const BorderDiv = styled.div`
    display: flex;
    gap: 1em;
    flexWrap: wrap;
`
export default function Details({info, borderC}) {
    console.log(info)
    const flagDpStyles = {
        backgroundImage: `url(${info.flags?.svg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '278px',
        width: '100%',
        marginBottom: '3rem'
    }
    const LinkStyles = {
        padding: '0.5em 1em',
        gap: '0.5em',
        TextDecoration: 'none'
    }

    const borders = info.borders?.map((border, i) => <StyledLink key={i} to={borderC ? `/border-country/${border}` : `/${border}`}>{border}</StyledLink>)
    const languages = info.languages && Object.values(info.languages).join(', ')
    const currency = info.currencies && Object.values(info.currencies)[0].name
    const nativeName = info.name && Object.values(info.name.nativeName)[0].official
    const population = info.population?.toString()
    const topLevelDomain = info.tld?.[0]
    
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
                <BorderDiv>
                    {borders ? borders: 'No borders'}
                </BorderDiv>
            </main></ArticleCont>
    )
}