import React, { Component } from 'react';

export default class TableHead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Description</th>
                </tr>
            </thead>
        )
    }
}
