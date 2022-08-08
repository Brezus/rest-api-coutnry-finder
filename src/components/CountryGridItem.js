import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const DivWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 21rem);
  width: 100%;
  border-radius: 9px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  @media (min-width: 700px) {
    grid-template-rows: repeat(2, 10.5rem);
    max-width: 22.5rem;
  }

  h2 {
    margin-bottom: 0.9em;
    font-size: 2.1rem;
    font-weight: var(--fwl);
    @media (min-width: 700px) {
      font-size: 1.1rem;
      margin-bottom: 0.7em;
    }
  }

  p {
    font-size: 1.7rem;
    font-weight: var(--fwm);
    margin-bottom: 0.25em;
    @media (min-width: 700px) {
      font-size: 0.9rem;
    }
  }

  .country-grid-item__flag {
    grid-row: 1;
    background-size: cover;
    background-position: center;
  }
  .country-grid-item__text {
    grid-row: 2;
    text-align: left;
    padding: 2.1em 0 0 3.2em;
    background-color: ${({ theme }) => theme.body};
    @media (min-width: 700px) {
      padding: 1em 1.6em;
    }
  }
`
export default function CountryGridItem({ data }) {
  const { allData, visible } = data
  const linkStyles = {
    width: "100%",
    maxWidth: "22.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    display: `${!visible ? "none" : "flex"}`,
    textDecoration: "none",
  }

  return (
    <Link to={`/${allData.name.common.trim()}`} style={linkStyles}>
      <DivWrapper>
        <div
          className="country-grid-item__flag"
          style={{ backgroundImage: `url(${allData.flags.png})` }}
        ></div>
        <div className="country-grid-item__text">
          <h2>{allData.name.common}</h2>
          <p>{`Population: ${allData.population.toLocaleString()}`}</p>
          <p>{`Region: ${allData.region}`}</p>
          <p>{`Capital: ${allData.capital}`}</p>
        </div>
      </DivWrapper>
    </Link>
  )
}
