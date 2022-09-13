
import './App.css';
import { Counter } from './features/counter/Counter';
import {getUsers} from './features/counter/usersSlice'
function App() {

  const saga= ()=>{getUsers()}
  return (
    <div className="App">
     <p>hello world</p>
     
     <button onClick={()=>saga}>saga</button>
    </div>
  );
}

export default App;
