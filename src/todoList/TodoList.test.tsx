import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoList from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
