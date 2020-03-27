import Link from 'next/link';
import React from 'react';
import Event from './Event';
import Map from './Map';

const EventList = props => {
  if (!props.events)
    return null;

  // array of events
  const events = Object.values(props.events);

  return (
    <>
      {/* <div className="col-7"> */}
      <Map events={events} />
      {/* </div> */}

      {/* <div className="col-5"> */}
      <div className="list-group mt-2">
        {events.map(event => (
          <Link href="/events/[slug]" as={`/events/${event.slug}`} key={event.slug}>
            <a
              className="list-group-item list-group-item-action"
              key={event.slug}
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
