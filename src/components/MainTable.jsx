import React, { Component } from 'react'
import TableColumnHead from './TableColumnHead'

export default class MainTable extends Component {

    render() {
        let headers = this.props.headers ? this.props.headers.map((header) => (
            <TableColumnHead header={header} key={header} />
        )) : null;

        return (
            <table className="react-table">
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
            </table>
        )
    }
}
