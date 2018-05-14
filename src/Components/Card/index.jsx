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
          <div className={`passDiv ${data.passed ? 'passed' : 'failed'}`}>
            { data.passed ? 'passed' : 'failed' }
          </div>
          <div>
            <p>Convicted</p>
            <span>{data.num}</span>
          </div>
        </div>
        <div className="cardContent">
          <p>Proccessed {data.proccessed} of {data.proccessed}</p>
        </div>
      </CardStyle>
    );
  }
}

export default Card;

