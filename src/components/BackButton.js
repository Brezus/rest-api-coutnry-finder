import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"

const Button = styled.button`
  display: flex;
  align-items: center;
  align-self: start;
  padding: 0.5em 2.5em;
  gap: 0.5em;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin-bottom: 4.4em;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  border-radius: 2px;
  grid-column: 1;
  grid-row: 1;
  max-width: 150px;
`

export default function BackButton() {
  let history = useHistory()
  return (
    <Button onClick={() => history.goBack()}>
      <FontAwesomeIcon icon={faArrowLeftLong} /> Back
    </Button>
  )
}
