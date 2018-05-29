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
        <div className={`header ${data.curp ? 'passed' : 'failed'}`}>
          {title}
        </div>
        <div className="contentdiv">
          {
            data.curp && (
              <div>
                <p>Datos</p>
                <div><strong>Curp</strong>: { data.curp || 'No hay data' }</div>
                <div><strong>Nombre</strong>: { data.name || 'No hay data' }</div>
                <div><strong>Apellido</strong>: { data.lastName || 'No hay data' }</div>
                <div><strong>Genero</strong>: { data.gender || 'No hay data' }</div>
                <div><strong>birthday</strong>: { data.birthday || 'No hay data' }</div>
              </div>
            )
          }
          {
            !data.curp && (
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

