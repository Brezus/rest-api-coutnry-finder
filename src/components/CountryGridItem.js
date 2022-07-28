import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const DivWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 21rem);
    width: 71%;
    border-radius: 9px;
    background-color: ${({theme}) => theme.background};
    overflow: hidden;
  
    h2 {
        margin-bottom: .9em;
        font-size: 2.1rem;
        font-weight: var(--fwl);
      }

      p {
        font-size: 1.7rem;
        font-weight: var(--fwm);
        margin-bottom: .25em;
      }

      .country-grid-item__flag{
        grid-row: 1;
        background-size: cover;
        background-position: center;
      }
      .country-grid-item__text {
        grid-row: 2;
        text-align: left;
        padding: 2.1em 0 0 3.2em;
        background-color: ${({theme}) => theme.background};
      }
`

export default function CountryGridItem({data}) {
    const {allData, visible} = data
    console.log(allData)
    const linkStyles = {
        width: '100%',
        marginInline: 'auto',
        justifyContent: 'center',
        backgroundColor: 'white',
        display: `${!visible ? 'none' : 'flex'}`
    }
   return (
        <Link to={`/${allData.name.common.toLowerCase()}`} style={linkStyles}>
            <DivWrapper>
                <div className="country-grid-item__flag" style={{backgroundImage: `url(${allData.flags.png})`}}></div>
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

