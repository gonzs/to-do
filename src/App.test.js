import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  root.unmount();
});
