import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Result item={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
