import App from 'next/app';
import Page from '../components/Page';

import axios from 'axios';

import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { events_url } from '../util/config';

class MyApp extends App {
  state = {
    events: [],
    currentEvent: {}
  };

  componentDidMount() {
    // TODO regulisi greske
    this.loadEvents().catch(err => {
      console.log('greska');
      console.log(err);
    });
  }

  loadEvents = async () => {
    // 1. copy existing state
    // const events = { ...this.state.events };

    // 2. fetch events from api
    const events = await (await axios.get(events_url)).data;

    // 3. update events
    this.setState({
      events: events,
      currentEvent: events && events.length > 0 && events[0]
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
          <Component {...this.state} selectEvent={this.selectEvent} />
        </Page>
      </>
    );
  }
}

export default MyApp;
