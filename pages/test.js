import React, { Component } from 'react';
import Map from '../components/Map';
import Event from '../components/Event';

const Test = props => {
  if (!props.currentEvent || !props.currentEvent.name) return null;
  const center = {
    lat: props.currentEvent.location.coordinates[1],
    lng: props.currentEvent.location.coordinates[0]
  };
  return (
    <div>
      <div className="mb-3">
        <Event event={props.currentEvent} fullDescription={true} />
      </div>
      <div>
        <Map events={[props.currentEvent]} center={center} zoom={14} />
      </div>
    </div>
  );
};

export default Test;
