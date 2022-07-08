import React, { Component } from 'react';
import { useDispatch } from 'react-redux';

function AnimalListItem({ classData }) {

    const dispatch = useDispatch();

    const transfer = () => {
        dispatch({ type: 'TRANSFER_ANIMAL_SAGA', payload: classData });
    }

	return (
		<tr>
			<td>{classData.species_name}</td>
			<td>{classData.class_name}</td>
            <td><button onClick={transfer}>Transfer</button></td>
		</tr>
	);
}

export default AnimalListItem;
