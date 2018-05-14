import React, { Component } from 'react';
import { Select, Input, Button } from 'antd';
import Card from 'Components/Card';
import InfoData from 'Components/InfoData';
import DashboardStyle from './style';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          name: 'Procaduria',
          passed: true,
          num: 0,
          proccessed: 17,
          response: [{
            title: 'Nombre', data: 'Emil Jose',
          }],
        },
        {
          name: 'Policia Nacional',
          passed: false,
          num: 10,
          proccessed: 17,
          response: [{
            title: 'Resultado', data: 'No tiene pendientes',
          }],
        },
      ],
    };
  }
  render() {
    const { Data } = this.state;
    return (
      <DashboardStyle>
        <div className="searchInputs">
          <Select defaultValue="1" >
            <Select.Option value="1">Cedula de Ciudadania</Select.Option>
            <Select.Option value="2">Cedula de Extranjeria</Select.Option>
            <Select.Option value="3">Pasaporte</Select.Option>
          </Select>
          <Input placeholder="Document" />
          <Button type="primary" >Search</Button>
        </div>
        <div>
          {
            Data.map(item => <Card data={item} />)
          }
        </div>
        <div>
          {
            Data.map(item => <InfoData data={item} />)
          }
        </div>
      </DashboardStyle>
    );
  }
}

export default Dashboard;

