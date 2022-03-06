import React from 'react';

export default function Summary (props) {
    const { info } = props;
    const { summary } = info;

    return (
        <ul>
            {Object.keys(summary.regions).map(
                (r,i) => {
                    return (<li key={i}>{r}</li>)
                })}
        </ul>
    )
}