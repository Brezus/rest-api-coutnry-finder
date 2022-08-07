import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

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

export default function BorderButton({ borderCode }) {
  const [borderName, setBorderName] = useState("")
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
      .then((res) => res.json())
      .then((data) => {
        setBorderName(data[0].name.common)
      })
  }, [borderCode])

  return <StyledLink to={`/${borderCode}`}>{borderName}</StyledLink>
}
