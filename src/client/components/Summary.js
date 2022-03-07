import React, {Fragment} from 'react';
import {v4 as uuid} from 'uuid';

/**
 * A table that displays the summary of the search results
 * @param {*} props 
 * @returns 
 */
export default function Summary (props) {
    const { info } = props;
    const { summary } = info;
    const regionTableRows = [];
    
    //create region headers
    const headerKey = uuid();
    const regionHeaders = (
        <tr key={headerKey}>
            <th>region</th>
            <th>num_countries_in_region</th>
        </tr>
    )
    regionTableRows.push(regionHeaders);

    //create region table data rows
    Object.keys(summary.regions).forEach((r, i) => {
        let arr = summary.regions[r];
        let id = uuid();
        const row = (
            <tr key={id}>
                <td>{r}</td>
                <td>{arr.length}</td>
            </tr>
        );
        regionTableRows.push(row);
    });

    //create subregion headers
    const subregionTableRows = [];
    const headerId = uuid();
    const subregionHeaders = (
        <tr key={headerId}>
            <th>subregion</th>
            <th>num_countries_in_subregion</th>
        </tr>
    )
    subregionTableRows.push(subregionHeaders);

    //create subregion table rows
    Object.keys(summary.subregions).forEach((s, i) => {
        let arr = summary.subregions[s];
        let id = uuid();
        const row = (
            <tr key={id}>
                <td>{s}</td>
                <td>{arr.length}</td>
            </tr>
        );
        subregionTableRows.push(row);
    });

    return (
        <div className='vertical-spacing'>
            <h2>Summary</h2>
            <h3>Total Number of countries: {summary.total}</h3>
            <h4>Regions</h4>
            <table className='center'>
                <tbody>
                    {regionTableRows}
                </tbody>
            </table>
            <h4>Subregions</h4>
            <table className='center'>
                <tbody>
                    {subregionTableRows}
                </tbody>
            </table>
        </div>
    )
}