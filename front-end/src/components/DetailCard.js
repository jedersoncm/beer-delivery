import React from 'react';
import PropTypes from 'prop-types';

export default function DetailCard(props) {
  const { index, quantity, name, price } = props;

  return (
    <div className="salecard-card">
      <p data-testid={ `${index}-product-qtd` }>{ quantity }</p>
      <p data-testid={ `${index}-product-name` }>{ name }</p>
      <p
        data-testid={ `${index}-product-total-value` }
      >
        { `R$ ${price.replace('.', ',')}` }
      </p>
    </div>
  );
}

DetailCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
