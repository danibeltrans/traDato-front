import React, { Component } from 'react';
import { Select, Input, Button } from 'antd';
import Card from 'Components/Card';
import InfoData from 'Components/InfoData';
import constant from 'Constants';
import DashboardStyle from './style';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [{
        name: 'Procaduria',
        statusPerson: true,
        num: 0,
        proccessed: 17,
        response: [{
          title: 'Nombre', data: 'Emil Jose',
        }],
      }],
      occurrence: [],
      judicialResult: null,
    };
    this.searchById = this.searchById.bind(this);
  }
  searchById() {
    const { API_URL } = constant;
    // judicialResult
    const { occurrence, Data = {} } = this.state;
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const url = `${API_URL}mock/query/${occurrence}`;
    fetch(url, config)
      .then(resp => resp.json())
      .then((response) => {
        Data[0].response[0].data = response.name || 'Emil Hernandez';
        this.setState({ judicialResult: response, Data });
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { Data, judicialResult } = this.state;
    return (
      <DashboardStyle>
        <div className="searchInputs">
          <Select defaultValue="1" >
            <Select.Option value="1">Cedula de Ciudadania</Select.Option>
            <Select.Option value="2">Cedula de Extranjeria</Select.Option>
            <Select.Option value="3">Pasaporte</Select.Option>
          </Select>
          <Input onChange={e => this.setState({ occurrence: e.target.value })} placeholder="Document" />
          <Button onClick={this.searchById} type="primary" >Search</Button>
        </div>
        <div>
          {
            judicialResult && (
              <div>
                <div style={{ float: 'left' }}>{ Data.map(item => <Card data={item} />) }</div>
                <Card data={judicialResult} />
              </div>
            )
          }
        </div>
        <div>
          {
            judicialResult && (
              <div>
                <div>{ Data.map(item => <InfoData data={item} />) }</div>
                <InfoData data={judicialResult} />
              </div>
            )
          }
        </div>

      </DashboardStyle>
    );
  }
}

export default Dashboard;

