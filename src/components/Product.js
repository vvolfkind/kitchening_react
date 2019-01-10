import React from 'react';
import ButtonVerMas from './ButtonVerMas';

const Product = props => {
  return (
    <article className="product-card">
      <img src={props.imgUrl} alt="imagen-producto" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <ButtonVerMas 
          buttonHref={props.buttonHref}
        />

    </article>
  )
}

export default Product;