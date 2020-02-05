import React, { Component } from 'react';

export default class TableHead extends Component {
    clickHandle = (e) => {
        let sortableColumn = e.target;
        Array.prototype.forEach.call(e.currentTarget.children, (child) => {
            if (child !== sortableColumn)
            child.classList.remove('ascending');
            child.classList.remove('descending');
        });
        
        if (!sortableColumn.classList.contains('ascending')) {
            sortableColumn.classList.remove('descending')
            sortableColumn.classList.add('ascending');
        } else {
            sortableColumn.classList.remove('ascending');
            sortableColumn.classList.add('descending')
        }
        this.props.sortRecords(sortableColumn.dataset.name, sortableColumn.classList.contains('ascending'), sortableColumn.dataset.type);
    }

    render() {
        return (
            <thead>
                <tr onClick={this.clickHandle}>
                    <th data-name='id' data-type='number'>ID</th>
                    <th data-name='firstName' data-type='string'>First Name</th>
                    <th data-name='lastName' data-type='string'>Last Name</th>
                    <th data-name='email' data-type='string'>Email</th>
                    <th data-name='phone' data-type='string'>Phone</th>
                    <th data-name='address' data-type='address'>Address</th>
                    <th data-name='description' data-type='string'>Description</th>
                </tr>
            </thead>
        )
    }
}
