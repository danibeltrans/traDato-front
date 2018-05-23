import React, { Component } from 'react';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card';
import InfoData from 'components/InfoData';
import constant from 'Constants';
import DashboardStyle from './style';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: '1',
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
    this.handleSimple = this.handleSimple.bind(this);
  }
  handleSimple(event) {
    this.setState({ [event.target.name]: event.target.value });
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
    const { Data, judicialResult, document } = this.state;
    const { classes = {} } = this.props;
    return (
      <DashboardStyle>
        <div className="searchInputs">
          <Select
            MenuProps={{
              className: classes.selectMenu,
            }}
            classes={{
              select: classes.select,
            }}
            value={document}
            onChange={this.handleSimple}
            inputProps={{
              name: 'document',
              id: 'document',
            }}
          >
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected,
              }}
              value="1"
            >
              Cedula de Ciudadania
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected,
              }}
              value="2"
            >
              edula de Extranjeria
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected,
              }}
              value="3"
            >
              Pasaporte
            </MenuItem>
          </Select>
          <CustomInput
            id="regular"
            inputProps={{
              placeholder: 'Document',
            }}
            formControlProps={{
              fullWidth: true,
            }}
          />
          <Button color="primary" round onClick={this.searchById}>Search</Button>
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

