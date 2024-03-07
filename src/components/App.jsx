import { Component } from 'react';
import Notification from './Notification';
import Section from './Section';
import FeedbackOptions from './FeedBackOptions';
import Statistics from './Statistics';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (state) => {
    const total = this.countTotalFeedback(state);
    const { good } = this.state;
    return total === 0 ? 0 : Math.round((good / total) * 100)};

  handleChangeState = (type) =>{
    this.setState((prev) => ({[type] : prev[type] + 1 }))

  }


  
   render (){ 
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
    <div>
    <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleChangeState} />
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
}