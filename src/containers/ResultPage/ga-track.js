import ReactGA from 'react-ga';

export default () => {
  ReactGA.event({
    category: 'quiz',
    action: 'enter',
    label: process.env.REACT_APP_TRACKING_LABEL,
  });
}
