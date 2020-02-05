import React, { Component } from 'react';
import MainHeader from './components/MainHeader';
import MainTable from './components/MainTable';
import Pagination from './components/Pagination';

export default class ReactTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      records: [],
      currentPage: 0
    }
  }

  changePage = (page) => {
    this.setState(oldState => {
      oldState.currentPage = page;
      return oldState;
    })
  }

  splitRecords = (records) => {
    const size = 50;
    const splitedRecords = records.reduce((finalRecordsList, record, index) => {
      if (finalRecordsList[finalRecordsList.length - 1].length === size) {
        finalRecordsList.push([]);
      }

      finalRecordsList[finalRecordsList.length - 1].push(record)
      return finalRecordsList;
    }, [[]]);

    return splitedRecords;
  }

  changeCount = (records) => {


    this.setState({
      records: this.splitRecords(records),
      currentPage: 0
    }, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className="">
        <MainHeader changeCount={this.changeCount} />
        {this.state.records.length > 0 ? (
          <>
            <Pagination
              changePage={this.changePage}
              pageCount={this.state.records.length}
              currentPage={this.state.currentPage}
            />
            <MainTable records={this.state.records[this.state.currentPage]} />
            <Pagination
              changePage={this.changePage}
              pageCount={this.state.records.length}
              currentPage={this.state.currentPage}
            />
          </>
        ) : null}
      </div>
    )
  }
}
