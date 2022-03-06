import React from 'react';

export default function Summary (props) {
    const { countries } = props;

    return (
        <div>
            {countries.summary}
        </div>
    )
}