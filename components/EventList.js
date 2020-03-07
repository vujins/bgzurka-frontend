import Axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { events_url } from '../util/config';
import Event from './Event';
import Map from './Map';

const EventList = props => {
  if (!props.events || props.events.length === 0 || !props.events[0].name)
    return null;
  return (
    <>
      {/* <div className="col-7"> */}
      <Map events={props.events} />
      {/* </div> */}

      {/* <div className="col-5"> */}
      <div className="list-group mt-2">
        {props.events.map(event => (
          <Link href="/test" key={event.slug}>
            <a
              className="list-group-item list-group-item-action"
              key={event.slug}
              onClick={() => props.selectEvent(event)}
            >
              <Event event={event} />
            </a>
          </Link>
        ))}
      </div>
      {/* </div> */}
    </>
  );
};

export default EventList;
