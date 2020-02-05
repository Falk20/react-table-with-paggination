import React, { Component } from 'react';

export default class TableBody extends Component {
    clickHandle = (e) => {
        let choosenTr = e.target.closest('tr');
        let info = {
            id: choosenTr['id'].innerText
        };

        console.log(info);
    }

    render() {
        let records = this.props.records.map((record) => {
            let address = record.address;
            let viewAddress = `${address.state}, ${address.city},\n${address.streetAddress}, ${address.zip}`;
            return (
                <tr key={record.id + record.email}>
                    <td className='id' name='id'>{record.id}</td>
                    <td className='first-name' name='first-name'>{record.firstName}</td>
                    <td className='last-name' name='last-name'>{record.lastName}</td>
                    <td className='email' name='email'>{record.email}</td>
                    <td className='phone' name='phone'>{record.phone}</td>
                    <td className='address' name='address'>{viewAddress}</td>
                    <td className='description' name='description' title={record.description}>{record.description}</td>
                </tr>
            )
        });

        return (
            <tbody onClick={this.clickHandle}>
                {records}
            </tbody>
        )
    }
}
