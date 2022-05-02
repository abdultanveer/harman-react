import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';


function App() {

  
  return (
    <div className="App">
    
    <Greet name="abdul" alias="abd" />

    <Welcome name="harman" address="bangalore"/>

    
    </div>
  );
}

export default App;
