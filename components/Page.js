import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import Footer from './Footer';

class Page extends Component {
  render() { 
    return ( 
      <div className="container">
        <Meta/>
        <Header />
        {this.props.children}
        <Footer />
      </div>
     );
  }
}
 
export default Page;