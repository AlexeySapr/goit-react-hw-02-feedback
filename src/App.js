import './App.css';
import Container from './components/container/Container';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <h1 className="AppHeader">Reviews widget</h1>
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;
