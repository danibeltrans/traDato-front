import React, { Component } from 'react';
import { Table } from 'antd';
import ReportsStyle from './style';

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        search: '1',
        id: '1',
        name: 'John Brown',
        date: '10/10/2017',
        issue: true,
        error: false,
      }, {
        key: '2',
        search: '2',
        id: '2',
        name: 'Jim Green',
        date: '12/10/2017',
        issue: true,
        error: false,
      }, {
        key: '3',
        search: '3',
        id: '3',
        name: 'Joe Black',
        date: '13/10/2017',
        issue: false,
        error: false,
      }],
      columns: [{
        title: 'search',
        dataIndex: 'search',
      }, {
        title: 'id',
        dataIndex: 'id',
      }, {
        title: 'name',
        dataIndex: 'name',
      }, {
        title: 'date',
        dataIndex: 'date',
      }, {
        title: 'issue',
        dataIndex: 'issue',
      }, {
        title: 'error',
        dataIndex: 'error',
      }],
    };
  }
  render() {
    const { data, columns } = this.state;
    return (
      <ReportsStyle>
        <Table columns={columns} dataSource={data} size="middle" />
      </ReportsStyle>
    );
  }
}

export default Reports;

