import React from 'react';
import Result from './Result';

export default function ResultsList(props) {
  const results = props.data.map((item, i) => <Result key={i} item={item}/>)
  return(
    <ul>
      {results}
    </ul>
  );
}