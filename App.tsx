import React from 'react';
import useLoadData from '~/utils/hooks/useSeed';
import Providers from './src/Provider';
import SQLite from 'react-native-sqlite-storage';

function App(): JSX.Element {
  // TODO Delete this function
  const deleteDatabase = () => {
    const db = SQLite.deleteDatabase(
      'model-data.db',
      () => {
        console.log(`Database  deleted successfully`);
      },
      error => {
        console.log(`Failed to delete database : ${error}`);
      },
    );
  };
  // deleteDatabase();
  useLoadData();

  return <Providers />;
}

export default App;
