
import Home from './Home';
import Navbar from './NavBar';

function App() {

const name="Vivek";
const obj={name:"vivek", age:"22", degree:"Btech"};

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>App Component</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
