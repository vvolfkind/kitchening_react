import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';
import SocialSnippet from './components/SocialSnippet';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <SocialSnippet />
        <ProductsGrid />
        <Footer />
      </div>
    );
  }
}

export default App;
