import React, { Component } from 'react';
import { google_api_url } from '../config';

class Map extends Component {
  // state = {  }
  static defaultProps = {
    // belgrade
    center: { 
      lat: 44.7866,
      lng: 20.4489
    },
    zoom: 11,
    markers: [
      {
        lat: 44.7866,
        lng: 20.4489
      },
      {
        lat: 44.74,
        lng: 20.4489
      },
      {
        lat: 44.7866,
        lng: 20.4
      }
    ]
  };

  divRef = React.createRef();

  componentDidMount() {
    // must import here because it reaches for the dom
    const scriptjs = require('scriptjs');

    scriptjs(google_api_url, () => {
      const map = new google.maps.Map(this.divRef.current, {
        center: this.props.center,
        zoom: this.props.zoom
      });

      this.props.markers &&
        this.props.markers.map(marker => {
          new google.maps.Marker({
            position: marker,
            map: map
          });
        });
    });
  }

  render() {
    return (
      <div style={{ height: '400px', width: '100%' }} ref={this.divRef}></div>
    );
  }
}

export default Map;
