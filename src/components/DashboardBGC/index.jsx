import React, { Component } from 'react';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card';
import InfoData from 'components/InfoData';
import CurpData from 'components/InfoData/curpData';
import constant from 'Constants';
import GridContainer from 'components/Grid/GridContainer';
import ItemGrid from 'components/Grid/ItemGrid';
import StatsCard from 'components/Cards/StatsCard';
import Select from 'material-ui/Select';
import withStyles from 'material-ui/styles/withStyles';
import MenuItem from 'material-ui/Menu/MenuItem';
import ContentCopy from '@material-ui/icons/ContentCopy';
import Warning from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/Check';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from 'Actions';
import extendedFormsStyle from 'assets/jss/material-dashboard-pro-react/views/extendedFormsStyle';
import DashboardStyle from './style';

class DashboardBGC extends Component {
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
    const { getSIPSOInfo } = this.props;
    getSIPSOInfo(occurrence);
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
    const { classes = {}, sipso: { sipso = {} } } = this.props;
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
            maxLength="2"
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
              CURP
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected,
              }}
              value="2"
            >
              Cedula de Extranjeria
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
              onChange: e => this.setState({ occurrence: e.target.value }),
            }}
            formControlProps={{
              fullWidth: true,
            }}
          />
          <Button color="primary" round onClick={this.searchById}>Search</Button>
        </div>
        <div>
          <GridContainer>
            {
              Object.keys(sipso).length !== 0 && (
                <ItemGrid xs={12} sm={6} md={6} lg={3}>
                  <StatsCard
                    icon={ContentCopy}
                    iconColor={sipso.curp ? 'green' : 'danger'}
                    title="Curp"
                    description={sipso.curp ? 'Success' : 'failed'}
                    statIcon={sipso.curp ? Check : Warning}
                    statIconColor={sipso.curp ? 'green' : 'danger'}
                    statText={sipso.curp ? sipso.curp : 'failed'}
                  />
                </ItemGrid>
              )
            }
          </GridContainer>
          {
            judicialResult && (
              <div>
                <div style={{ float: 'left' }}>{ Data.map(item => <Card data={item} />) }</div>
                <Card data={judicialResult} />
              </div>
            )
          }
        </div>
        {
          Object.keys(sipso).length !== 0 && (
            <CurpData data={sipso} title="Sipso" />
          )
        }
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

const MapStateToProps = state => ({
  sipso: state.sipso,
});
const MapDispatchToProps = dispatch => ({
  getSIPSOInfo: bindActionCreators(action.getSIPSOInfo, dispatch),
});

export default withStyles(extendedFormsStyle)(connect(MapStateToProps, MapDispatchToProps)(DashboardBGC));

