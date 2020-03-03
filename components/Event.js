import React, { Component } from 'react';
// import scriptjs from 'scriptjs';
import { google_api_url } from '../config';

class Event extends Component {
  nameRef = React.createRef();
  dateRef = React.createRef();
  addressRef = React.createRef();
  tagsRef = React.createRef();
  descriptionRef = React.createRef();

  clicked = false;

  componentDidMount() {
    // must import here because it reaches for the dom
    const scriptjs = require('scriptjs');

    scriptjs(google_api_url, () => {
      const dropdown = new google.maps.places.Autocomplete(
        this.addressRef.current
      );

      dropdown.addListener('place_changed', () => {
        const place = dropdown.getPlace();
        console.log(place);
      });

      // console.log(this.addressRef);

      // prevent submit form on enter
      // this.addressRef.current.on('keydown', (event) => {
      //   if (event.keyCode === 13) event.preventDefault();
      // });
    });
  }

  handleSubmit = event => {
    // 1. prevent default
    event.preventDefault();

    console.log(this.clicked);

    // only submit if button submit clicked
    if (this.clicked === true) {
      // 2. create event
      const createdEvent = {
        name: this.nameRef.current.value,
        date: this.dateRef.current.value,
        address: this.addressRef.current.value, // change to location
        tags: this.tagsRef.current.value.split(',').map(s => s.trim()), // split
        description: this.descriptionRef.current.value
      };
      // this.props.addEvent(createdEvent);

      // console.log(createdEvent);

      // 3. refresh the form
      event.currentTarget.reset();

      // 4. reset clicked status
      this.clicked = false;
    }
  };

  handleChangeAddress = event => {
    // console.log(this.addressRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">name</label>
          <input
            name="name"
            ref={this.nameRef}
            type="text"
            id="eventName"
            className="form-control"
            placeholder="Enter event name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">date</label>
          <input
            name="date"
            ref={this.dateRef}
            type="date"
            id="eventDate"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventAddress">address</label>
          <input
            name="address"
            ref={this.addressRef}
            onChange={this.handleChangeAddress}
            type="text"
            id="eventAddress"
            className="form-control"
            placeholder="Enter event address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDescription">description</label>
          <textarea
            name="description"
            ref={this.descriptionRef}
            id="eventDescription"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventTags">tags</label>
          <input
            name="tags"
            ref={this.tagsRef}
            type="text"
            id="eventTags"
            className="form-control"
            placeholder="Enter comma separated tags (rejv, top, hot)"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            this.clicked = true;
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Event;
