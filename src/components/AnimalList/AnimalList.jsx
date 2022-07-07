import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalListItem from '../AnimalListItem/AnimalListItem';

// DO NOT MODIFY THIS FILE FOR BASE MODE!

function AnimalList() {
  const dispatch = useDispatch();
  let zooAnimals = useSelector(store => store.zooAnimals);

  // on load, dispatch the saga action
  useEffect(() => {
    console.log('in useEffect');
    const action = { type: 'GET_ZOO_ANIMALS' };
    dispatch(action);
  }, []);

  // Renders the list of animals
  return (
    <table className='AnimalList'>
      <thead>
        <tr>
          <th>Species</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        {/* Render each item from the zooAnimal reducer */}
        {zooAnimals.map((classData, i) => {
            return <AnimalListItem key={i} classData={classData} />;
        })}
      </tbody>
    </table>
  );
}

export default AnimalList;
