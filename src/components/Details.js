import React from "react";

export default function Details({info}) {
    console.log(info)
    return (
        <>
            <main>
                <h2>{info.name.official}</h2>
                
                <ul>
                    <li>{info.population.toLocaleString()}</li>
                    <li>{info.region}</li>
                    <li>{info.name.common}</li>
                    <li>hi</li>
                    <li></li>
                </ul>
                <ul>
                </ul>
                <h2>Border Countries:</h2>
                
            </main></>
    )
}