import * as React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux-toolkit/store';
import { PersistGate } from 'redux-persist/integration/react';
import { TodoApp } from './src/TodoApp';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoApp />
      </PersistGate> 
    </Provider>
  );
}
