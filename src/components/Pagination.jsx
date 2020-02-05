import React, { Component } from 'react';
import PageList from './PageList';

export default class Pagination extends Component {
    clickHandle = (e) => {
        if (e.target.id === 'next-page' && this.props.currentPage < this.props.pageCount - 1) {
            this.props.changePage(this.props.currentPage + 1);
        }

        if (e.target.id === 'prev-page' && this.props.currentPage > 0) {
            this.props.changePage(this.props.currentPage - 1);
        }
    }

    render() {
        return (
            <div className='pagination'>
                <a id='prev-page' onClick={this.clickHandle}>{'<'}</a>
                <PageList
                    pageCount={this.props.pageCount}
                    currentPage={this.props.currentPage}
                    changePage={this.props.changePage}
                />
                <a id='next-page' onClick={this.clickHandle}>{'>'}</a>
            </div>
        )
    }
}
