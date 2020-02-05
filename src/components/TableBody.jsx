import React, { Component } from 'react';

export default class TableBody extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstName: ''
        }
    }


    clickHandle = (e) => {
        const choosenTr = e.target.closest('tr');
        this.setState({
            id: choosenTr.children['id'].innerText,
            firstName: choosenTr.children['first-name'].innerText
        },()=>{
            this.props.chooseRecord(this.state);
        });

        
    }

    render() {
        let records = this.props.records.map((record) => {
            const address = record.address;
            const viewAddress = `${address.streetAddress},\n${address.city} ${address.zip}, ${address.state}`;
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
