import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { google_api_url } from '../util/config';
import Event from './Event';

class Map extends Component {
  // state = {  }
  static defaultProps = {
    // belgrade savamala
    center: {
      lat: 44.81084,
      lng: 20.450981
    },
    zoom: 13
  };

  divRef = React.createRef();

  componentDidMount() {
    // if no events passed
    if (!this.props.events) return;

    // must import after component mounts because it reaches for the dom
    const scriptjs = require('scriptjs');

    scriptjs(google_api_url, () => {
      const options = {
        center: this.props.center,
        zoom: this.props.zoom,
        mapTypeControl: false, // satelite/normal option
        gestureHandling: 'greedy'
      };
      const map = new google.maps.Map(this.divRef.current, options);

      // add open popups to this list
      const openinfowindows = [];

      this.props.events.forEach(event => {
        const marker = new google.maps.Marker({
          position: {
            lat: event.location.coordinates[1],
            lng: event.location.coordinates[0]
          },
          map: map,
          animation: google.maps.Animation.DROP
        });
        const eventpopup = <Event event={event} />;
        const infowindow = new google.maps.InfoWindow({
          content: ReactDOMServer.renderToStaticMarkup(eventpopup)
        });
        marker.addListener('click', () => {
          // close open popups
          while (openinfowindows.length > 0) openinfowindows.pop().close();

          infowindow.open(map, marker);
          openinfowindows.push(infowindow);
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
