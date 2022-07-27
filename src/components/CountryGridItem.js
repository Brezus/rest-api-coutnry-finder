import React from "react";

export default function CountryGridItem({data}) {
   return (
        <div className="country-grid-item">
            <div className="country-grid-item__flag" style={{backgroundImage: `url(${data.flags.png})`}}></div>
            <div className="country-grid-item__text">
                <h2>{data.name.common}</h2>
                <p>{`Population: ${data.population.toLocaleString()}`}</p>
                <p>{`Region: ${data.region}`}</p>
                <p>{`Capital: ${data.capital}`}</p>
            </div>
        </div>
   )
}