import React, { Component } from 'react'
import DataCountChanger from './components/DataCountChanger';
import MainTable from './components/MainTable';

export default class ReactTable extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  changeCount = (records) => {
    this.setState({
      records
    }, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className="">
        <DataCountChanger changeCount={this.changeCount} />
        {this.state.records ? (
          <MainTable headers={ Object.keys(this.state.records[0])} />
        ) : null}
      </div>
    )
  }
}
