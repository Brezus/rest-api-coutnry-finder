import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import BackButton from "./BackButton"

const ArticleCont = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92%;
  margin-inline: auto;
  padding-top: 2em;
  padding-bottom: 6em;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px auto;
    grid-column-gap: 10vw;
    padding: 0;
  }
  @media (min-width: 1000px) {
    grid-column-gap: 11em;
    grid-row-gap: 3.9em;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1.2fr 1.3fr;
    grid-column-gap: 8.5em;
    align-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: start;
    align-self: start;
    gap: 1em;
    text-align: left;
    @media (min-width: 700px) {
      grid-row: 2;
      grid-column: 2;
      flex-wrap: wrap;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      grid-column-gap: 5em;
      padding-top: 3.2em;
    }
    @media (min-width: 1100px) {
      grid-row: 2;
      grid-column: 2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 50px auto auto;
      text-align: left;
      padding-top: 0em;
      align-self: center;
    }

    h2 {
      font-size: 1.6rem;
      width: 100%;
    }
  }
  ul {
    list-style: none;
    text-align: left;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    font-weight: 800;
    @media (min-width: 700px) {
      font-size: 0.8rem;
      width: 50%;
      text-align: center;
    }
    @media (min-width: 1100px) {
      width: 100%;
      grid-row: 2;
      text-align: left;
    }
  }
  ul + ul {
    margin-bottom: 2em;
    @media (min-width: 700px) {
      margin-bottom: 0em;
    }
  }
`
const H2Styled = styled.h2`
  width: 100%;
  @media (min-width: 1100px) {
    width: auto;
  }
`
const BorderCont = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  grid-row: 3;
  grid-column: 1/-1;
  flex-wrap: wrap;
  @media (min-width: 1100px) {
    flex-direction: row;
  }
`
const FlagDiv = styled.div`
  background-size: cover;
  background-position: center;
  height: 278px;
  width: 100%;
  margin-bottom: 3rem;
  grid-row: 2;
  grid-column: 1;

  @media (min-width: 1100px) {
    margin-bottom: 0rem;
    height: 400px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5em 1em;
  gap: 0.5em;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  border-radius: 2px;
`
const BorderDiv = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  max-width: 100%;
`
export default function Details({ info, borderC }) {
  const LinkStyles = {
    padding: "0.5em 1em",
    gap: "0.5em",
    TextDecoration: "none",
  }

  const borders = info.borders?.map((border, i) => (
    <StyledLink
      key={i}
      to={borderC ? `/border-country/${border}` : `/${border}`}
    >
      {border}
    </StyledLink>
  ))
  const languages = info.languages && Object.values(info.languages).join(", ")
  const currency = info.currencies && Object.values(info.currencies)[0].name
  const nativeName =
    info.name && Object.values(info.name.nativeName)[0].official
  const population = info.population?.toLocaleString()
  const topLevelDomain = info.tld?.[0]

  return (
    <ArticleCont>
      <BackButton />
      <FlagDiv style={{ backgroundImage: `url(${info.flags?.svg})` }}></FlagDiv>
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
        <BorderCont>
          <H2Styled>Border Countries:</H2Styled>
          <BorderDiv>{borders ? borders : "No borders"}</BorderDiv>
        </BorderCont>
      </main>
    </ArticleCont>
  )
}
