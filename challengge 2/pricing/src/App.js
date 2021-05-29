import logo from './logo.svg';
import './App.css';
import Card from './card/card'
import Header from './card/header'
import Footer from './card/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Card />
        <Footer />
        </div>
      </div>
  );
}

export default App;
