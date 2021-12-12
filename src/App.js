import './App.css';
import Container from './components/container/Container';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Section from './components/section/Section';

function App() {
  return (
    <div className="App">
      <h1 className="AppHeader">Reviews widget</h1>
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions />
        </Section>
        <Section title={'Statistics'}></Section>
      </Container>
    </div>
  );
}

export default App;
