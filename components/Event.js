import React, { Component } from 'react';
import autocomplete from '../util/autocomplete';
import axios from 'axios';

class Event extends Component {
  nameRef = React.createRef();
  dateRef = React.createRef();
  addressRef = React.createRef();
  tagsRef = React.createRef();
  descriptionRef = React.createRef();

  formRef = React.createRef();

  componentDidMount() {
    autocomplete(this.addressRef.current);
  }

  handleSubmit = event => {
    // prevent default submit
    event.preventDefault();
  };

  handleChangeAddress = event => {
    // console.log(this.addressRef.current.value);
  };

  handleClick = event => {
    // 2. create event
    const createdEvent = {
      name: this.nameRef.current.value,
      date: this.dateRef.current.value,
      location: {
        type: 'Point',
        address: this.addressRef.current.value,
        coordinates: [20.4489, 44.7866]
      },
      tags: this.tagsRef.current.value.split(',').map(s => s.trim()),
      description: this.descriptionRef.current.value
    };

    // 3. save event
    // this.props.addEvent(createdEvent);
    // console.log(createdEvent);
    axios
      .post('http://localhost:7777/event', createdEvent)
      .then(res => {
        console.log(res);
        // 4. refresh the form
        this.formRef.current.reset();
      })
      .catch(err => {
        console.log('greska');
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef}>
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
          type="button"
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Save
        </button>
      </form>
    );
  }
}

export default Event;
