import React, { Component } from 'react';
import CardStyle from './style';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <CardStyle>
        <div className="cardHeader">
          <div className={`passDiv ${data.statusPerson ? 'passed' : 'failed'}`}>
            { data.statusPerson ? 'passed' : 'failed' }
          </div>
          <div>
            <p>Convicted</p>
            <span>{data.num}</span>
          </div>
        </div>
        <div className="cardContent">
          <p>Proccessed {data.proccessed || '2'} of {data.proccessed || '2'}</p>
        </div>
      </CardStyle>
    );
  }
}

export default Card;

