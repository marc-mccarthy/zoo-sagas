import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddAnimal() {
	useEffect(() => {
		dispatch({ type: 'GET_ANIMAL_CLASSES_SAGA' });
	}, []);

	const dispatch = useDispatch();
	const animalClasses = useSelector(store => store.animalClasses);

	const [species, setSpecies] = useState('');
	const [animalClass, setAnimalClass] = useState('');

	const submit = () => {
		dispatch({
			type: 'ADD_ANIMAL_SAGA',
			payload: { species, animalClass },
		});
	};

	return (
		<div>
			{animalClasses.length === 0 ? (
				<div>Loading...</div>
			) : (
				<form>
					<input
						type='text'
						placeholder='Species'
						onChange={e => setSpecies(e.target.value)}
						value={species}
					/>
					<select onChange={e => setAnimalClass(e.target.value)}>
						<option value='' disabled selected>
							Choose
						</option>
						{animalClasses.map(ac => {
							return (
								<option key={ac.id} value={ac.id}>
									{ac.class_name}
								</option>
							);
						})}
					</select>
					<button onClick={submit} type='submit'>
						Submit
					</button>
				</form>
			)}
		</div>
	);
}

export default AddAnimal;
