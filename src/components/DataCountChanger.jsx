import React, { Component } from 'react'

export default class DataCountChanger extends Component {
    clickHandle = (e) => {
        let url = new URL('http://www.filltext.com/');
        url.searchParams.append('rows', e.target.value);
        url.searchParams.append('id', '{number|1000}');
        url.searchParams.append('firstName', '{firstName}');
        url.searchParams.append('lastName', '{lastName}');
        url.searchParams.append('email', '{email}');
        url.searchParams.append('phone', '{phone|(xxx)xxx-xx-xx}');
        url.searchParams.append('address', '{addressObject}');
        url.searchParams.append('description', '{lorem|32}');

        fetch(url)
            .then(res => res.json())
            .then(result => {
                this.props.changeCount(result);
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className='data-count'>
                <span>Сколько загрузить?</span>
                <button className='waves-effect waves-light btn-small' onClick={this.clickHandle} value='32'>32 записи</button>
                <button className='waves-effect waves-light btn-small' onClick={this.clickHandle} value='1000'>1000 записей</button>
            </div>
        )
    }
}
