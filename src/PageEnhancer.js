import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

class ScrollToTop extends Component {
  componentDidMount() {
    const debug = process.env.NODE_ENV === 'development';
    ReactGA.initialize(process.env.REACT_APP_GA_ID, { debug });
    ReactGA.pageview(window.location.pathname + '#' + this.props.location.pathname + window.location.search);

    ReactPixel.init(process.env.REACT_APP_PIXEL_ID, null, { debug });
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
