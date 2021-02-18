import React from 'react'

export function Table(firstnames, lastnames) {
    return (
        <div>
            <table>
                <tr>
                    <th>firstname</th><th>lastname</th>
                </tr>
                <tr>
                    <th>{firstnames}</th><th>{lastnames}</th>
                </tr>
            </table>
        </div>
    )
}
