import React, { Component } from 'react';
import autocomplete from '../util/autocomplete';
import axios from 'axios';
import { getToday } from '../util/util';

class EditEvent extends Component {
  nameRef = React.createRef();
  dateRef = React.createRef();
  addressRef = React.createRef();
  tagsRef = React.createRef();
  descriptionRef = React.createRef();

  formRef = React.createRef();

  state = {
    location: {
      address: '',
      lat: 0,
      lng: 0
    }
  };

  setLocation = (address, lat, lng) => {
    // 1. take a copy of existing
    const location = { ...this.state.location };
    // 2. update location
    location.address = address;
    location.lat = lat;
    location.lng = lng;
    // 3. update state
    this.setState({ location: location });
  };

  componentDidMount() {
    autocomplete(this.addressRef.current, this.setLocation);
  }

  handleChangeAddress = event => {
    // console.log(this.addressRef.current.value);
  };

  handleSubmit = event => {
    // 1. prevent default submit
    event.preventDefault();

    // 2. create event
    const createdEvent = {
      name: this.nameRef.current.value,
      date: this.dateRef.current.value,
      location: {
        type: 'Point',
        address: this.state.location.address,
        coordinates: [this.state.location.lng, this.state.location.lat]
      },
      tags: this.tagsRef.current.value.split(',').map(s => s.trim()),
      description: this.descriptionRef.current.value
    };

    // 3. save event
    // this.props.addEvent(createdEvent);
    axios
      .post('http://localhost:7777/event', createdEvent)
      .then(res => {
        // console.log(res);
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
            defaultValue={getToday()}
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
          <small id="eventAddressHelp" className="form-text text-muted">Choose on map</small>
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
          onClick={this.handleClick}
        >
          Save
        </button>
      </form>
    );
  }
}

export default EditEvent;
