import React from 'react';
import ReactDOM from 'react-dom';
import ResultsList from './ResultsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultsList data={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
