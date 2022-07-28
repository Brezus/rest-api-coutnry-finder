import React from "react";

export default function CountryGridItem({data}) {
    const {allData, visible} = data
    console.log(allData)
   return (
        <div className="country-grid-item" style={{display: `${!visible && 'none'}`}}>
            <div className="country-grid-item__flag" style={{backgroundImage: `url(${allData.flags.png})`}}></div>
            <div className="country-grid-item__text">
                <h2>{allData.name.common}</h2>
                <p>{`Population: ${allData.population.toLocaleString()}`}</p>
                <p>{`Region: ${allData.region}`}</p>
                <p>{`Capital: ${allData.capital}`}</p>
            </div>
        </div>
   )
}