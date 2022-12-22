import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import Container from './Container';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    switch (option) {
      case 'Good':
        setGood(counter => counter + 1);
        break;
      case 'Neutral':
        setNeutral(counter => counter + 1);
        break;
      case 'Bad':
        setBad(counter => counter + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good * 100) / (good + neutral + bad);

    return good ? Math.round(percentage) : 0;
  };

  const noFeedback = good || neutral || bad;

  return (
    <Container>
      <Section title={'Please leave a feedback'}>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleIncrement}
        />
        {noFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
}