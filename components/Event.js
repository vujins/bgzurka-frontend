import React from 'react';
import Rating from './Rating';

const Event = props => {
  // if no event is pass return null
  if (!props.event || !props.event.name) return null;

  const d = new Date(props.event.date);
  return (
    <div className="media">
      <img
        src={props.event.img}
        alt=""
        className="mr-3 img-fluid d-none d-sm-block"
        width="100"
        height="150"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{props.event.name}</h5>
        <h6>{props.event.location.address}</h6>
        {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}
        <p className="mt-0 mb-0">
          {props.fullDescription
            ? props.event.description
            : `${props.event.description.slice(0, 100)} ${
                props.event.description.length < 100
                  ? ''
                  : '... Click to read more!'
              }`}
        </p>
        <Rating
          rating={props.event.rating / props.event.ratingCount}
          key={props.event.slug}
        />
        <div>
          {props.event.tags.map(tag => (
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
