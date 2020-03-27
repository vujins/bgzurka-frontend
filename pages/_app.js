import App from 'next/app';
import Page from '../components/Page';

import axios from 'axios';

import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { events_url } from '../util/config';

class MyApp extends App {
  state = {
    events: {}
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
    const events = { ...this.state.events };

    // 2. fetch events from api
    const eventsarray = await (await axios.get(events_url)).data;

    // format data
    eventsarray.forEach(event => events[event.slug] = event);

    // 3. update events
    this.setState({
      events
    });
  };

  render() {
    const { Component } = this.props;

    return (
      <>
        <Page>
          <Component {...this.state} />
        </Page>
      </>
    );
  }
}

export default MyApp;
