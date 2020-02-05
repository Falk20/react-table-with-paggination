import React, { Component } from 'react';
import RecordsCount from './RecordsCount';
import Filter from './Filter';

export default class MainHeader extends Component {
    render() {
        return (
            <nav className=''>
                <h1>Таблица</h1>
                <RecordsCount changeCount={this.props.changeCount}/>
                <Filter filterRecords={this.props.filterRecords}/>
            </nav>
        )
    }
}
