import React, { Component } from 'react'

export default class AddNewRecord extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    submitHandle = (e) => {
        e.preventDefault();
        let formElems = e.target.elements;
        this.setState({
            id: formElems['id'].value,
            firstName: formElems['first-name'].value,
            lastName: formElems['last-name'].value,
            email: formElems['email'].value,
            phone: formElems['phone'].value,
            address: {
                streetAddress: formElems['street-address'].value,
                city: formElems['city'].value,
                state: formElems['state'].value,
                zip: formElems['zip'].value,
            },
            description: formElems['description'].value
        }, ()=> {
            this.props.addNewRecord(this.state);
        });
    }

    clickHandle = (e) => {
        if (e.target.classList.contains('form-wrapper') || e.target.classList.contains('close-form') || e.target.classList.contains('send-form')) {
            e.target.closest('.form-wrapper').classList.add('hidden');
        }
    }

    render() {
        return (
            <div className='form-wrapper hidden' onClick={this.clickHandle}>
                <form className="add-new-record" onSubmit={this.submitHandle}>
                    <label htmlFor="id">ID:</label>
                    <input id='id' name='id' type="number" />
                    <label htmlFor="first-name">First Name:</label>
                    <input id='first-name' name='first-name' type="text" />
                    <label htmlFor="last-name">Last Name:</label>
                    <input id='last-name' name='last-name' type="text" />
                    <label htmlFor="email">Email:</label>
                    <input id='email' name='email' type="email" />
                    <label htmlFor="phone">Phone:</label>
                    <input id='phone' name='phone' type="tel" />
                    <label htmlFor="street-address">Street Address:</label>
                    <input id='street-address' name='street-address' type="text" />
                    <label htmlFor="city">City:</label>
                    <input id='city' name='city' type="text" />
                    <label htmlFor="state">State:</label>
                    <input id='state' name='state' type="text" />
                    <label htmlFor="zip">Zip:</label>
                    <input id='zip' name='zip' type="text" />
                    <label htmlFor="description">Description:</label>
                    <textarea id='description' name='description' />

                    <button className='send-form' type="submit">Save</button>
                    <span className="close-form">x</span>
                </form>
            </div>
        )
    }
}
