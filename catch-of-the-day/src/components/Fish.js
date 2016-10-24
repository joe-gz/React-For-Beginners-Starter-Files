import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {

  render() {
    const {details, identifier} = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';

    return (
      <li className='menu-fish'>
        <img src={details.image} alt={details.name} />
        <h3>
          {details.name}
          <span className='price'>{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(identifier)}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish;
