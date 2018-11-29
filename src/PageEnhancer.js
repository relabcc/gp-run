import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

class ScrollToTop extends Component {
  componentDidMount() {
    const debug = process.env.NODE_ENV === 'development';
    ReactGA.initialize('UA-36627671-1', { debug });
    ReactGA.pageview(window.location.pathname + '#' + this.props.location.pathname + window.location.search);

    ReactPixel.init('1534311166840921', null, { debug });
    ReactPixel.pageView();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
      ReactGA.pageview(window.location.pathname + '#' + location.pathname);
      ReactPixel.pageView();
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
