import React, { Component } from 'react';
import Map from '../components/Map';

class Test extends Component {
  state = {};
  render() {
    return <Map markers={[{ lat: 44.75, lng: 20.448 }]} />;
  }
}

export default Test;
