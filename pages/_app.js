import App from 'next/app';
import Page from '../components/Page';

import axios from 'axios';

import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const base_url = 'http://localhost:7777';
const events_url = base_url + '/event';

class MyApp extends App {
  state = {
    events: [],
    currentEvent: 0
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    // 1. copy existing state
    // const events = { ...this.state.events };

    // 2. update events
    axios.get(events_url).then(res => {
      const events = res.data;
      // 3. update state
      this.setState({ events: events, currentEvent: events && events[0] });
    });
  };

  selectEvent = currentEvent => {
    // console.log(currentEvent);

    // 1. copy existing current event
    // let currentEvent = { ...this.state.currentEvent };

    // 2. update current event
    // currentEvent = event;

    // 3. save state
    this.setState({
      currentEvent: currentEvent
    });
  };

  render() {
    const { Component } = this.props;

    return (
      <>
        <Page>
          <Component
            events={this.state.events}
            currentEvent={this.state.currentEvent}
            selectEvent={this.selectEvent}
          />
        </Page>
      </>
    );
  }
}

export default MyApp;
