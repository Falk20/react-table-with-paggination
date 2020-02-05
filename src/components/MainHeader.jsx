import React, { Component } from 'react';
import RecordsCount from './RecordsCount';
import Filter from './Filter';

export default class MainHeader extends Component {
    addRecordHandle = (e) => {
        document.querySelector('.form-wrapper').classList.remove('hidden');
    }

    render() {
        return (
            <nav className=''>
                <h1>Таблица</h1>
                <RecordsCount changeCount={this.props.changeCount}/>
                <button className="add-new-record" onClick={this.addRecordHandle}>Новая запись</button>
                <Filter filterRecords={this.props.filterRecords}/>
            </nav>
        )
    }
}
