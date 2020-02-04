import React, { Component } from 'react'

export default class TableColumnHead extends Component {
    render() {
        return (
            <th>
                {this.props.header}
            </th>
        )
    }
}
