import React from 'react';

export default function Results (props) {
    let { info } = props;
    let { countries } = info;
    const names = countries.map((c,i) => {
        return (<li key={i}>{c.name.common}</li>)
    });

    return (
        <ul>
            {names}
        </ul>
    )
}