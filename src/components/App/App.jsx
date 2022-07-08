import AnimalList from '../AnimalList/AnimalList';
import './App.css';
import AddAnimal from '../AddAnimal/AddAnimal';
import AddClass from '../AddClass/AddClass';

function App() {
	// Renders the entire app on the DOM
	return (
		<div className="App">
			<header>
				<h1>Zoo Animals</h1>
				<h3>List of Species and Class</h3>
			</header>
			<br />
			<AddAnimal />
			<br />
            <AddClass />
            <br />
			<AnimalList />
		</div>
	);
}

export default App;
