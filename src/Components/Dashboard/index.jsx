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
      endpoints: [{
        title: 'Penal',
        occurrence: 'CR1234568',
      }, {
        title: 'Penal',
        occurrence: 'CR0932355',
      }, {
        title: 'Penal',
        occurrence: 'CR87320782',
      }, {
        title: 'Penal',
        occurrence: 'CT628812832',
      }, {
        title: 'Penal',
        occurrence: 'ERROR',
      }],
      Data: [
        {
          name: 'Procaduria',
          statusPerson: true,
          num: 0,
          proccessed: 17,
          response: [{
            title: 'Nombre', data: 'Emil Jose',
          }],
        },
      ],
      judicialResult: null,
      occurrence: [],
    };
    this.search = this.search.bind(this);
  }
  searchById() {
    const { API_URL } = constant;
    const { occurrence } = this.state;
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
        this.setState({ judicialResult2: response });
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  search() {
    const { endpoints } = this.state;
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const { API_URL } = constant;
    endpoints.map((item, index) => {
      const url = `${API_URL}mock/query/${item.occurrence}`;
      return fetch(url, config)
        .then(resp => resp.json())
        .then((response) => {
          const { judicialResult } = this.state;
          judicialResult[index] = response;
          this.setState({ judicialResult });
          return response;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  render() {
    const { Data, judicialResult2 } = this.state;
    return (
      <DashboardStyle>
        <div className="searchInputs">
          <Select defaultValue="1" >
            <Select.Option value="1">Cedula de Ciudadania</Select.Option>
            <Select.Option value="2">Cedula de Extranjeria</Select.Option>
            <Select.Option value="3">Pasaporte</Select.Option>
          </Select>
          <Input onChange={e => this.setState({ occurrence: e.target.value })} placeholder="Document" />
          <Button onClick={() => { this.searchById(); }} type="primary" >Search</Button>
        </div>
        <div>
          {
            judicialResult2 && (
              <div>
                <div style={{ float: 'left' }}>{ Data.map(item => <Card data={item} />) }</div>
                <Card data={judicialResult2} />
              </div>
            )
          }
        </div>
        <div>
          {
            judicialResult2 && (
              <div>
                <div>{ Data.map(item => <InfoData data={item} />) }</div>
                <InfoData data={judicialResult2} />
              </div>
            )
          }
        </div>

      </DashboardStyle>
    );
  }
}

export default Dashboard;

