import React from 'react';
import NavigationBar from './components/elements/NavigationBar';
import About from './components/pages/About';
import Featured from './components/pages/Projects';

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <About />
        <Featured />
    </div>
  );
}

export default App;
