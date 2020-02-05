import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <form className=''>
                <input className='' type='search' placeholder='Введите фильтр' />
                <button className='' type='submit'>Поиск</button>
            </form>
        )
    }
}
