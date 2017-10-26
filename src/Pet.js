import React from 'react';

const Pet = (props) => {
  return (
    <section>
      <h3>{props.name}</h3>
      <ul>
        <li><img src={props.imageURL} width='200' /></li>
        <li>{props.gender}</li>
        <li>{props.age}</li>
        <li>{props.breed}</li>
        <li>{props.story}</li>
      </ul>
    </section>
  );
}

export default Pet;
