import React, { Component } from 'react';
import MainHeader from './components/MainHeader';
import MainTable from './components/MainTable';
import Pagination from './components/Pagination';

export default class ReactTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      records: [],
      splitedRecords: [],
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

  sortRecords = (columnName, ascending, type) => {
    let records = this.state.records;
    records = records.sort((a, b) => {
      let one = a[columnName];
      let two = b[columnName];

      if (type === 'string') {
        one = one.toLowerCase();
        two = two.toLowerCase();
      }

      if (type === 'address') {
        one = one.city;
        two = two.city;
      }

      if (one > two) {
        return 1;
      }
      if (one === two) {
        return 0;
      }
      if (one < two) {
        return -1;
      }

      return 0;
    })

    if (!ascending) {
      records = records.reverse();
    }

    this.setState({
      records: records,
      splitedRecords: this.splitRecords(records),
      currentPage: 0
    });
  }

  filterRecords = (e) => {
    
  }

  changeCount = (records) => {
    this.setState({
      records: records,
      splitedRecords: this.splitRecords(records),
      currentPage: 0
    }, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className=''>
        <MainHeader
          changeCount={this.changeCount}
          filterRecords={this.filterRecords}
        />
        {this.state.splitedRecords.length > 0 ? (
          <>
            <Pagination
              changePage={this.changePage}
              pageCount={this.state.splitedRecords.length}
              currentPage={this.state.currentPage}
            />
            <MainTable
              records={this.state.splitedRecords[this.state.currentPage]}
              sortRecords={this.sortRecords}
            />
            <Pagination
              changePage={this.changePage}
              pageCount={this.state.splitedRecords.length}
              currentPage={this.state.currentPage}
            />
          </>
        ) : null}
      </div>
    )
  }
}
