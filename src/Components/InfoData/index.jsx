import React, { Component } from 'react';
import InfoDataStyle from './style';

class InfoData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <InfoDataStyle>
        <div className={`header ${data.passed ? 'passed' : 'failed'}`}>
          {data.name}
        </div>
        <div className="contentdiv">
          <p>Datos</p>
          {data.response.map((item, index) => (
            <div key={`data-${index + 1}`}>
              {item.title}: {item.data}
            </div>))}
        </div>
      </InfoDataStyle>
    );
  }
}

export default InfoData;

