import React, { Component } from 'react'

export default class AddNewRecord extends Component {
    render() {
        return (
            <div className='form-wrapper'>
                <form className="add-new-record">
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

                    <button type="submit">Save</button>
                    <span className="close-form">x</span>
                </form>
            </div>
        )
    }
}
