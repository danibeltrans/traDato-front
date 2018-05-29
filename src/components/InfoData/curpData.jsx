import React, { Component } from 'react';
import InfoDataStyle from './style';

class CurpData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data = {}, title } = this.props;
    console.log(data);
    return (
      <InfoDataStyle>
        <div className={`header ${data.status ? 'passed' : 'failed'}`}>
          {title}
        </div>
        <div className="contentdiv">
          {
            data.status && (
              <div>
                <p>Datos</p>
                <div><strong>Curp</strong>: { data.sipso.curp || 'No hay data' }</div>
                <div><strong>Nombre</strong>: { data.sipso.name || 'No hay data' }</div>
                <div><strong>Apellido</strong>: { data.sipso.lastName || 'No hay data' }</div>
                <div><strong>Genero</strong>: { data.sipso.gender || 'No hay data' }</div>
                <div><strong>birthday</strong>: { data.sipso.birthday || 'No hay data' }</div>
              </div>
            )
          }
          {
            !data.status && (
              <div>
                <p>Error</p>
                <div><strong>mensaje</strong>: { data.message }</div>
              </div>
            )
          }
        </div>
      </InfoDataStyle>
    );
  }
}

export default CurpData;

