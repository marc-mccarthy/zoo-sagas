import React, { Component } from 'react';

// DO NOT MODIFY THIS FILE FOR BASE MODE!
function AnimalListItem({ classData }) {
  // Renders the list of animals
  return (
    <tr>
      <td>{classData.species_name}</td>
      <td>{classData.class_name}</td>
    </tr>
  );
}

export default AnimalListItem;
