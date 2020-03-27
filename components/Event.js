import React from 'react';
import Rating from './Rating';

const Event = props => {
  // if no event is pass return null
  if (!props.event || !props.event.name) return null;
  const event = props.event;

  const d = new Date(event.date);
  return (
    <div className="media">
      <img
        src={event.img? event.img : "/party.png"}
        alt=""
        className="mr-3 img-fluid d-none d-sm-block"
        width="100"
        height="150"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{event.name}</h5>
        <h6>{event.location.address}</h6>
        {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}
        <p className="mt-0 mb-0">
          {props.fullDescription
            ? event.description
            : `${event.description.slice(0, 100)} ${
                event.description.length < 100 ? '' : '... Click to read more!'
              }`}
        </p>
        <Rating rating={event.rating / event.ratingCount} key={event.slug} />
        <div>
          {event.tags.map(tag => (
            <span className="badge badge-primary mr-1" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
