import React, { Component } from 'react';

class Currency extends Component {
  state = {  }
  render() { 
    const money = new Intl
            .NumberFormat(this.props.locale,
              {
                style: 'currency',
                currency: this.props.currency
              })
    return ( 
      <div className="currency">
        {money}
      </div>
     );
  }
}
 
export default Currency;