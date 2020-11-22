import React from 'react';
import NavigationBar from './components/elements/NavigationBar';
import Header from './components/pages/Header';
import Featured from './components/pages/Projects';
import Acknowledgements from './components/pages/Thanks';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Featured />
      <Acknowledgements />
      <Footer />
    </div>
  );
}

export default App;
