import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import UserGreeting from './Components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting/>

      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name= "Abdulhadi" lastName= "Usman">
        <p>This is a children props</p>
        </Greet>
      <Greet name= "Ahusa" lastName= "Allahnana">
        <button>Read More</button>

      </Greet>
      <Greet name= "Allahnana" lastName= " Suleiman"/>

      <br/>


      <Welcome name= "Abdulhadi" lastName= "Usman"/>
      <Welcome name= "Ahusa" lastName= "Allahnana"/>
      <Welcome  name= "Allahnana" lastName= " Suleiman"/> */}

      {/* <Hello/> */}
    </div>
  );
}

export default App;
