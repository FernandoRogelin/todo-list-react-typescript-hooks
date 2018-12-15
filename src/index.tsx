import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoList from './todoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <TodoList />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
