import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Login, { Message } from './components/Message'

function App() {
  return (
    <div className="App">
    
      <Message/>

     {/* <Welcome name="abdul" alias =" ansari"/> */}
    </div>
  );
}

export default App;
