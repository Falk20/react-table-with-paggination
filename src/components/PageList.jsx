import React, { Component } from 'react'

export default class PageList extends Component {
    render() {
        let pages = [];

        for (let i = 0; i < this.props.pageCount; i++) {
            pages[i] = (
                <a className={i === this.props.currentPage ? 'current' : ''}>{i+1}</a>
            )
        }

        return (
            <>
                {pages}
            </>
        )
    }
}
