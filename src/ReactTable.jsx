import React, { Component } from 'react';
import MainHeader from './components/MainHeader';
import MainTable from './components/MainTable';
import Pagination from './components/Pagination';
import ViewInfoPopup from './components/ViewInfoPopup';
import AddNewRecord from './components/AddNewRecord';

export default class ReactTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      records: [],
      splitedRecords: [],
      currentPage: 0,
      choosenRecord: {},
      filter: ''
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
    }, () => {
      this.filterRecords(this.state.filter);
    });
  }

  setFilter = (searchString) => {
    this.setState(oldState => {
      oldState.filter = searchString;
    }, () => {
      this.filterRecords(this.state.filter);
    });
  }

  filterRecords = (filter) => {
    let records = this.state.records;
    //в данном случае нет смысла обрабатывать более глубокую вложенность,
    //так как это нагрузит функцию,
    //в случае появления в параметрах записей объектов с более глубокой вложенностью,
    //придётся делать обход по дереву параметров этих объектов
    records = records.filter((record) => {
      for (let param in record) {
        if (typeof record[param] === 'object') {
          for (let subParam in record[param]) {
            if (record[param][subParam].includes(filter)) {
              return true;
            }
          }
        } else {
          if (record[param].toString().includes(filter)) {
            return true;
          }
        }
      }
      return false;
    });

    this.setState(oldState => {
      oldState.currentPage = 0;
      oldState.splitedRecords = this.splitRecords(records);

      return oldState;
    })
  }

  changeCount = (records) => {
    this.setState({
      records: records,
      splitedRecords: this.splitRecords(records),
      currentPage: 0,
      choosenRecord: {},
      filter: ''
    });
  }
  //поскольку api предоставляет записи с повторяющимися id,
  // придётся расчитывать, что сочетание id+firstName будет уникальным
  //в боевых условиях, скорее всего, будет уникальный ключ
  chooseRecord = ({ id, firstName }) => {
    const choosenRecord = this.state.records.find((item) => {
      if (item.id === parseInt(id) && item.firstName === firstName) {
        return true;
      }
      return false;
    });

    this.setState(oldState => {
      oldState.choosenRecord = choosenRecord;

      return oldState;
    }, () => {
      document.querySelector('.view-info-wrapper').classList.remove('hidden');
    });
  }

  addNewRecord = (record) => {
    this.setState(oldState => {
      oldState.records.unshift(record)
      oldState.splitedRecords = this.splitRecords(oldState.records);
      oldState.currentPage = 0;
      return oldState;
    })
  }

  render() {
    return (
      <div className=''>
        <MainHeader
          changeCount={this.changeCount}
          setFilter={this.setFilter}
          availability={this.state.records.length === 0 ? false : true}
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
              chooseRecord={this.chooseRecord}
            />
            <Pagination
              changePage={this.changePage}
              pageCount={this.state.splitedRecords.length}
              currentPage={this.state.currentPage}
            />
          </>
        ) : null}
        {this.state.choosenRecord.id ? (
          <ViewInfoPopup choosenRecord={this.state.choosenRecord} />
        ) : null}
        <AddNewRecord addNewRecord={this.addNewRecord} />
      </div>
    )
  }
}
