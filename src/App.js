import './App.css';
import React from 'react'

import ComponentC from './components/hooks/useContext/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {


  return (
    <div className="App">
      <UserContext.Provider value={'abdul'}>
        <ChannelContext.Provider value={'ansari'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
