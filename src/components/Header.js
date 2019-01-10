import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="images/logo.jpg" alt="logotipo" className="logo"/>
            <a href="/" className="toggle-nav">
              <span className="fa fa-bars"></span>
            </a>

            <Navigation />

            <img className="banner" src="/images/img-banner.jpg" alt="banner" />
        </header>
      </div>
    );
  }
}
