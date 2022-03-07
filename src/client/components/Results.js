import React, {Fragment} from 'react';
import {v4 as uuid} from 'uuid';

export default function Results (props) {
    let { info } = props;
    let { countries } = info;
    const tableRows = [];
    const headerId = uuid();
    const headers = (
        <tr key={headerId}>
            <th>full_name</th>
            <th>alpha_code_2</th>
            <th>alpha_code_3</th>
            <th>flag</th>
            <th>region</th>
            <th>subregion</th>
            <th>population</th>
            <th>languages</th>
        </tr>
    )

    tableRows.push(headers);

    countries.forEach((c, i) => {
        const languages = Object.keys(c.languages).map((l) => {
            return ` ${c.languages[l]} `;
        });
        let id = uuid();
        const row = (
            <tr key={id}>
                <td>{c.name.official}</td>
                <td>{c.cca2}</td>
                <td>{c.cca3}</td>
                <td><img src={c.flags.png} alt='flag' /></td>
                <td>{c.region}</td>
                <td>{c.subregion}</td>
                <td>{c.population}</td>
                <td>{languages}</td>
            </tr>
        );

        tableRows.push(row);
    });

    return (
        <div className='vertical-spacing'>
            <h2>Countries</h2>
            <table className='center'>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
        
    )
}