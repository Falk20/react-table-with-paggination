import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default class MainTable extends Component {

    render() {
        return (
            <table className='react-table'>
                <TableHead sortRecords={this.props.sortRecords}/>

                <TableBody records={this.props.records}/>
            </table>
        )
    }
}
