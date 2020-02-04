import React, { Component } from 'react'
import DataCountChanger from './components/DataCountChanger';

export default class ReactTable extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  changeCount = (records) => {
    this.setState({
      records
    }, ()=>{
      console.log(this.state.records)
    })
  }

  render() {
    return (
      <div className="">
        <DataCountChanger changeCount={this.changeCount}/>
        
      </div>
    )
  }
}
