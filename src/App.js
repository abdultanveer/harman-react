import './App.css';
import React from 'react'

import ComponentC from './components/hooks/useContext/ComponentC';
import CounterOne from './components/hooks/reducer/CounterOne';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {


  return (
    <div className="App">
      <CounterOne />
    </div>
  );
}

export default App;
