import React from 'react';
import Event from '../components/Event';
import Link from 'next/link';
import Map from '../components/Map';

const events = props => {
  return (
    <div className="row">
      <div className="col-5">
        <ul className="list-group">
          {props &&
            props.events &&
            props.events.map(event => (
              <Link href="/test" key={event.slug}>
                <li
                  className="list-group-item"
                  key={event.slug}
                  onClick={() => props.selectEvent(event)}
                >
                  <Event event={event} />
                </li>
              </Link>
            ))}
        </ul>
      </div>
      <div className="col-7">
        <Map
          markers={
            props &&
            props.events &&
            props.events.map(event => ({
              lat: event.location.coordinates[1],
              lng: event.location.coordinates[0]
            }))
          }
          zoom={12}
        />
      </div>
    </div>
  );
};

export default events;
