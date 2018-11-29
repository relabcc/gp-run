import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import createStore from './state/createStore';
import Box from './components/Box';
import ThemeProvider from './components/ThemeProvider';

import HomePage from './pages/index';
import QuizPage from './pages/quiz';
import QuestionPage from './containers/QuestionPage';
import ResultPage from './containers/ResultPage';

import PageEnhancer from './PageEnhancer';

const App = () => (
  <Provider store={createStore()}>
    <Box height="100%">
      <ThemeProvider>
        <HashRouter>
          <PageEnhancer>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/quiz/question/:id" component={QuestionPage} />
              <Route path="/quiz/result" component={ResultPage} />
              <Route path="/quiz" component={QuizPage} />
            </Switch>
          </PageEnhancer>
        </HashRouter>
      </ThemeProvider>
    </Box>
  </Provider>
);

export default App;
