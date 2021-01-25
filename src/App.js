import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import StateProps from './StateProps';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <Header />

      <Navbar/>
      <h2>content </h2>
      <StateProps />
      
      <Map />
    </div>
  );
  
}




export default App;
