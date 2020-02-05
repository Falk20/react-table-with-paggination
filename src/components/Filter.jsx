import React, { Component } from 'react';

export default class Filter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchString: ''
        }
    }
    
    submitHandle = (e) => {
        e.preventDefault();
        this.props.setFilter(this.state.searchString);
    }

    changeHandle = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }
        
    render() {
        return (
            <form className='' onSubmit={this.submitHandle}>
                <input className='' type='search' placeholder='Введите фильтр' onChange={this.changeHandle}/>
                <button className='' type='submit'>Поиск</button>
            </form>
        )
    }
}
