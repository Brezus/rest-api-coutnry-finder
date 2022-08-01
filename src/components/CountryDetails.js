// import React, { useState } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
// import styled from 'styled-components'
// import { Link } from "react-router-dom";

// const ArticleCont = styled.article`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: ${({theme}) => theme.body};
//     width: 92%;
//     margin-inline: auto;

//     button {
//         display: flex;
//         align-items: center;
//         gap: .5em;
//         color: ${({theme}) => theme.text};
//         background-color: ${({theme}) => theme.background};
//     }
//     main {
//         display: flex;
//         flex-direction: column;
//         align-items: start;
//         align-self: start;
//     }
//     ul {
//         list-style: none;
//         text-align: left;
//         padding-left: 0;
//     }
// `




// export default function CountryDetails(props) {
//     const [bCData, setBCData] = useState([])
//     function fetchBcData(e) {
//         const countryCode = e.target
//         console.log(countryCode)
//         // setIsLoading(true)
//         // fetch(`https://restcountries.com/v3.1/alpha/${}`)
//         // .then(res => res.json())
//         // .then(data => {
//         //     setIsLoading(false)
//         //     setFetchedData(data.map(item => {
//         //         return {allData: item, visible: true }
//         //     }))
//         // })
//     }
//     const countriesData = useLocation()
//     const {countriesInfo} = countriesData.state
//     const borderLinks = countriesInfo.borders?.map((border, i) => <Link to={`/${bCData && bCData.name}`} onClick={(e) => fetchBcData(e)} key={i}>{border}</Link>)
//     let currency = null
//     for (let key in countriesInfo.currencies) {
//         if (Object.prototype.hasOwnProperty.call(countriesInfo.currencies, key)) {
//             var val = countriesInfo.currencies[key];
//             const currencyInfo = Object.values(val)
//             currency = currencyInfo[0]
//         }
//     }
//     const languages = Object.values(countriesInfo.languages).join(', ')
//     const flagDpStyles = {
//         backgroundImage: `url(${countriesInfo.flags.svg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '300px',
//         width: '100%'
//     }
//     let nativeName = ''
//     if (countriesInfo.name.nativeName.kal) {
//         nativeName = countriesInfo.name.nativeName.kal.official
//     } else if (countriesInfo.name.nativeName.spa) {
//         nativeName = countriesInfo.name.nativeName.spa.official
//     } else if (countriesInfo.name.nativeName.kat) {
//         nativeName = countriesInfo.name.nativeName.kat.official
//     } else {
//         nativeName = countriesInfo.name.common
//     }
//     console.log(countriesInfo)
//     return(
//         <ArticleCont>
//             <button><FontAwesomeIcon icon={faArrowLeftLong} /> Back</button>
//             <div style={flagDpStyles}></div>
//             <main>
//                 <h2>{countriesInfo.name.common}</h2>
//                 <ul>
//                     <li>Native Name: {nativeName}</li>
//                     <li>Population: {countriesInfo.population.toString()}</li>
//                     <li>Region: {countriesInfo.region}</li>
//                     <li>Sub Region: {countriesInfo.subregion}</li>
//                     <li>Capital: {countriesInfo.capital}</li>
//                 </ul>
//                 <ul>
//                     <li>Top Level Domain: {countriesInfo.tld[0]}</li>
//                     <li>Currencies: {currency}</li>
//                     <li>Languages: {languages}</li>
//                 </ul>
//                 <h2>Border Countries:</h2>
//                 <div style={{display: 'flex'}}>
//                     {borderLinks ? borderLinks : 'No borders'}
//                 </div>
//             </main>
//         </ArticleCont>
//     )
// }

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
    const countriesData = useLocation()
    const name = countriesData.pathname.substring(1)
    useEffect(() => {
        fetch(name.length > 3 ? `https://restcountries.com/v3.1/name/${name}` : `https://restcountries.com/v3.1/alpha/${name}`)
        .then(res => res.json())
        .then(data => setCData(data[0]))
    
    }, [])
    const borders = cData.borders && cData.borders.map(border => <Link to={`/border-country/${border}`}>{border}</Link>)
    
    return(
        <ArticleCont>
            <button><FontAwesomeIcon icon={faArrowLeftLong} /> Back</button>
            {borders && borders}
        </ArticleCont>
    )
}