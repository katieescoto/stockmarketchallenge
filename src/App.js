import React from 'react';
import './App.css';
import StockBoard from './components/stockBoard'
import Footer from './components/footer'
// import WelcomePage from './components/welcomePage'

function App() {

  return (
    <div className="App">
      {/* <WelcomePage /> */}
      <StockBoard/>
      <Footer />
    </div>
  );
}

export default App;
