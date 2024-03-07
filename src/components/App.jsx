import React, { useState } from 'react';
import Notification from './Notification';
import Section from './Section';
import FeedbackOptions from './FeedBackOptions';
import Statistics from './Statistics';


export const App = () => {

    const [good, setGood ] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
 

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100)};

  const handleChangeState = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };


    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    return (
    <div>
    <Section title="Please, leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleChangeState} />
    </Section>
    {!totalFeedback ? (<Notification message="There is no feedback" />) : (
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </Section>
    )}
  </div>
   

   )

  }