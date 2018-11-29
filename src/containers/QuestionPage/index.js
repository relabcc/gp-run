import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import LinksButton from '../../components/LinksButton';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Container from '../../components/Container';
import BackgroundImage from '../../components/BackgroundImage';
import VerticalCenter from '../../components/VerticalCenter';

import Logo from './Logo';
import Bubble from './Bubble';
import Progress from './Progress';

import questions from './questions.json';
import pictures from './qpictures';
import withReducer from './hoc';

const QuestionPage = ({ match: { params: { id: pageId } }, setAnswer, answers }) => {
  const qId = pageId - 1;
  const question = questions[qId];
  const isLast = Number(pageId) === questions.length;

  return (
    <Box position="relative" height="100%" overflow={['hidden', null, 'visible']}>
      <Logo />
      <Container height="100%">
        <VerticalCenter>
          <Bubble number={pageId}>
            {question.title}
          </Bubble>
          <Box px={[null, null, '17%', null, null, null, null, '5%']} mx={['-5%', '-8%', '0%']}>
            <BackgroundImage w={1} src={pictures[qId]} ratio={540 / 1020} />
          </Box>
          <Flex justify="center" key={qId}>
            {question.options && question.options.map((optText, optId) => (
              <Box key={optId} transform="translateY(-25%)">
                <LinksButton
                  w={['12em', null, '15em', null, null, null, null, '25em']}
                  px={['0em', null, '1em']}
                  py={['1em', null, null, null, null, null, null, '2em']}
                  to={isLast ? '/quiz/result' : `/quiz/question/${Number(pageId) + 1}`}
                  onClick={() => {
                    setAnswer(qId, optId);
                    ReactGA.event({
                      category: 'quiz',
                      action: (optId ? 'right' : 'left') + pageId,
                      label: process.env.REACT_APP_TRACKING_LABEL,
                    });
                  }}
                  mx={['0.25em', null, '1em']}
                  active={answers[qId] === optId}
                >
                  <Text f={['1em', null, '1.2em', null, null, null, null, '2em']} lineHeight="1.3" whiteSpace="pre" textAlign="center">{optText}</Text>
                </LinksButton>
              </Box>
            ))}
          </Flex>
        </VerticalCenter>
      </Container>
      <Progress currentId={qId} />
    </Box>
  );
};

QuestionPage.propTypes = {
  pathContext: PropTypes.object,
  answers: PropTypes.array,
  setAnswer: PropTypes.func,
};

export default withReducer(QuestionPage);
