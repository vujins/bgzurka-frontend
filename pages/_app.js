import App from 'next/app';
import Page from '../components/Page';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  componentDidMount() {
    console.log();
  }
  render() {
    const { Component } = this.props;

    return (
      <>
        <Page>
          <Component />
        </Page>
      </>
    );
  }
}

export default MyApp;
