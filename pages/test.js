import React, { Component } from 'react';
import Map from '../components/Map';
import Event from '../components/Event';

const Test = props => {
  const center = {
    lat: props.currentEvent.location && props.currentEvent.location.coordinates[1],
    lng: props.currentEvent.location && props.currentEvent.location.coordinates[0]
  };
  return (
    <div>
      <div className="mb-3">
        <Event event={props.currentEvent} fullDescription={true} />
      </div>
      <div>
        <Map markers={[center]} center={center} zoom={14} />
      </div>
    </div>
  );
};

export default Test;
