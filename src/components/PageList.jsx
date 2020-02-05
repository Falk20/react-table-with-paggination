import React, { Component } from 'react'

export default class PageList extends Component {
    clickHandle = (e) => {
        this.props.changePage(+e.target.dataset.page);
    }

    render() {
        let pages = [];

        for (let i = 0; i < this.props.pageCount; i++) {
            pages[i] = (
                <button
                    key={i}
                    className={i === this.props.currentPage ? 'current' : ''}
                    data-page={i}
                    onClick={this.clickHandle}
                >
                    {i + 1}
                </button>
            )
        }

        return (
            <>
                {pages}
            </>
        )
    }
}
