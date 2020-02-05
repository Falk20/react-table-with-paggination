import React, { Component } from 'react'

export default class ViewInfoPopup extends Component {
    closeHandle = (e) => {
        if (e.target.classList.contains('view-info-wrapper') || e.target.classList.contains('close-info')) {
            e.target.closest('.view-info-wrapper').classList.add('hidden');
        }
    }

    render() {
        const address = this.props.choosenRecord.address;

        return (
            <div className="view-info-wrapper hidden" onClick={this.closeHandle}>
                <div className='view-info'>
                    <div className='grid-container'>
                        <span>ID:</span>
                        <span>{this.props.choosenRecord.id}</span>
                        <span>First Name:</span>
                        <span>{this.props.choosenRecord.firstName}</span>
                        <span>Last Name:</span>
                        <span>{this.props.choosenRecord.lastName}</span>
                        <span>Email:</span>
                        <span><a href={`mailto:${this.props.choosenRecord.email}`}>{this.props.choosenRecord.email}</a></span>
                        <span>Phone:</span>
                        <span><a href={`tel:+${this.props.choosenRecord.phone}`}>{this.props.choosenRecord.phone}</a></span>
                        <span>Street:</span>
                        <span>{address.streetAddress}</span>
                        <span>City:</span>
                        <span>{address.city}</span>
                        <span>State:</span>
                        <span>{address.state}</span>
                        <span>Zip:</span>
                        <span>{address.zip}</span>
                        <span>Description:</span>
                        <span>{this.props.choosenRecord.description}</span>
                    </div>
                    <span className="close-info">x</span>
                </div>
            </div>
        )
    }
}
