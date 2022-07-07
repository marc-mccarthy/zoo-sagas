import AnimalList from '../AnimalList/AnimalList'
import './App.css';

function App() {
  // Renders the entire app on the DOM
      return (
      <div className="App">
        <header>
          <h1>Zoo Animals</h1>
          <h3>List of Species and Class</h3>
        </header>
        <br />
        <br />
        <AnimalList />
      </div>
    );
}

export default App;
