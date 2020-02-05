import React, { Component } from 'react';

export default class RecordsCount extends Component {
    clickHandle = (e) => {
        let url = new URL('http://www.filltext.com/');
        url.searchParams.append('rows', e.target.dataset.value);
        url.searchParams.append('id', '{number|1000}');
        url.searchParams.append('firstName', '{firstName}');
        url.searchParams.append('lastName', '{lastName}');
        url.searchParams.append('email', '{email}');
        url.searchParams.append('phone', '{phone|(xxx)xxx-xx-xx}');
        url.searchParams.append('address', '{addressObject}');
        url.searchParams.append('description', '{lorem|32}');
        let spinner = document.querySelector('#spinner')
        spinner.classList.add('show');
        fetch(url)
            .then(res => res.json())
            .then(result => {
                this.props.changeCount(result);
                spinner.classList.remove('show');
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className=''>
                <ul className=''>
                    <li className=''><button onClick={this.clickHandle} data-value='32'>32 записи</button></li>
                    <li className=''><button onClick={this.clickHandle} data-value='1000'>1000 записей</button></li>
                    <li><div id="spinner"></div></li>
                </ul>
            </div>
        )
    }
}
