import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddClass() {
	const dispatch = useDispatch();

	const [newClass, setNewClass] = useState('');

	const submit = () => {
		console.log(newClass);
		dispatch({ type: 'ADD_CLASS_SAGA', payload: { newClass } });
	};

	return (
		<div>
			<form>
				<input
					type="text"
					onChange={(e) => setNewClass(e.target.value)}
					placeholder="New Class Name"
				/>
				<button type="submit" onClick={submit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default AddClass;
