import React from 'react';
import {PaperProvider} from 'react-native-paper';
import theme from './src/theme';
import Picture from './src/screens/Picture';
// import {openDatabase} from 'react-native-sqlite-storage';
function App(): JSX.Element {
  // Use this instead of importing `Text` from `react-native-paper`

  return (
    <PaperProvider theme={theme}>
      <Picture />
    </PaperProvider>
  );
}

export default App;
