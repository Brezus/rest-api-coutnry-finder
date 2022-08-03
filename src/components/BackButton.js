import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: .5em;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.background};
`
export default function BackButton() {
    let history = useHistory()
  return (
    <Button onClick={() => history.goBack()}><FontAwesomeIcon icon={faArrowLeftLong} /> Back</Button>
  )
}
