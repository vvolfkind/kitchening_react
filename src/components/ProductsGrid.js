import React, { Component } from 'react';
import Product from './Product';

export default class ProductsGrid extends Component {
  render() {
    return (
      <section className="products-grid">
        <Product 
          imgUrl="images/img-pdto-1.jpg" 
          title="producto 1 lorem"
          description="lorem ipsum soy una descripsum"
          buttonHref="/"
        />

        <Product
          imgUrl="images/img-pdto-2.jpg"
          title="producto 2 ipsum"
          description="lorem ipsum soy una descripsum"
          buttonHref="/"
        />

        <Product
          imgUrl="images/img-pdto-3.jpg"
          title="producto 3 dolor"
          description="lorem ipsum soy una descripsum"
          buttonHref="/"
        />

        <Product
          imgUrl="images/img-pdto-1.jpg"
          title="producto 1 lorem"
          description="lorem ipsum soy una descripsum"
          buttonHref="/"
        />

        <Product
          imgUrl="images/img-pdto-2.jpg"
          title="producto 2 ipsum"
          description="lorem ipsum soy una descripsum"
          buttonHref="/"
        />

        <Product
          imgUrl="images/img-pdto-3.jpg"
          title="producto 3 dolor"
          description="lorem ipsum soy una descripsum"
          buttonHref="/"
        />

        <Product
          imgUrl="images/img-pdto-1.jpg"
          title="producto 1 lorem"
          description="lorem ipsum soy una descripsum"
          buttonHref="/"
        />

        <Product
          imgUrl="images/img-pdto-2.jpg"
          title="producto 2 ipsum"
          description="lalalala lololo"
          buttonHref="/"
        />

        <Product
          imgUrl="images/img-pdto-3.jpg"
          title="producto 3 dolor"
          description="que significa dolor amet"
          buttonHref="/"
        />
      </section>
    )
  }
}
