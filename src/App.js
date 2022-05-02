import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
    
      <Greet name ="abdul" alias ="tan">
          <p>this is children</p>
      </Greet>
      <Greet name ="ansari" alias ="an">
        <button>click me</button>
      </Greet>
      <Greet name ="harman" alias ="hmm"/>

     {/* <Welcome name="abdul" alias =" ansari"/> */}
    </div>
  );
}

export default App;
