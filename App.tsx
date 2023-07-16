import React, {useEffect} from 'react';
import {PaperProvider} from 'react-native-paper';
import theme from './src/theme';
import {View} from 'react-native';
import useDatabase from '~/utils/hooks/useDatabase';
import useLoadData from '~/utils/hooks/useSeed';
// import useLoadData from '~/utils/hooks/useSeed';

import SQLite from 'react-native-sqlite-storage';
import {getDBConnection} from '~/utils/db';

function App(): JSX.Element {
  const dbName = 'model-data.db';

  async function deleteDatabase() {
    const db = await getDBConnection();

    SQLite.deleteDatabase(
      dbName,
      () => {
        console.log(`Database ${dbName} deleted successfully`);
      },
      error => {
        console.log(`Error deleting database ${dbName}: ${error}`);
      },
    );
  }
  // deleteDatabase();
  useLoadData();
  const {getOneItem, data} = useDatabase();

  useEffect(() => {
    getOneItem(1, 'models');
  }, []);

  useEffect(() => {
    if (data) {
      console.error({...data});
    }
  }, [data]);
  return (
    <PaperProvider theme={theme}>
      <View></View>
    </PaperProvider>
  );
}

export default App;
