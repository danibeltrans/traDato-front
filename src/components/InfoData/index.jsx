import React, { Component } from 'react';
import InfoDataStyle from './style';

class InfoData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data = {} } = this.props;
    console.log(data);
    return (
      <InfoDataStyle>
        <div className={`header ${data.statusPerson ? 'passed' : 'failed'}`}>
          {data.judicialBody || data.name || 'No data'}
        </div>
        <div className="contentdiv">
          {
            data.response && data.response.length > 0 && data.response.map((item, index) => (
              <div key={`data-${index + 1}`}>
                <strong>{item.title}</strong>: {item.data}
              </div>))}
          {
            data.status === '0' && (
              <div>
                <p>Datos</p>
                <div><strong>Nombre</strong>: { data.name || 'No hay data' }</div>
                <div>{data.typeSubject && (<div><strong>Asunto</strong>: { data.typeSubject }</div>)}</div>
                <div>{data.recordNumber && (<div><strong>Record</strong>: { data.recordNumber }</div>)}</div>
                <div>{data.text && (<div><strong>Descripcion</strong>: { data.text }</div>)}</div>
              </div>
            )
          }
          {
            data.status === '1' && (
              <div>
                <p>Error</p>
                <div><strong>Nombre</strong>: { data.message }</div>
              </div>
            )
          }
        </div>
      </InfoDataStyle>
    );
  }
}

export default InfoData;

