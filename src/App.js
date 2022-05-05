import './App.css';
import React from 'react'

import ComponentC from './components/hooks/useContext/ComponentC';

export const UserContext = React.createContext()

function App() {


  return (
    <div className="App">
    <UserContext.Provider value = {'abdul'}>
      <ComponentC/>   
      </UserContext.Provider>

    </div>
  );
}

export default App;
