import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {BarcodeIcon} from '../icons';
import MyInput from './MyInput';

const SearchInput = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.searchContainer}>
      <MyInput
        state={text}
        setState={setText}
        placeholder="Type to Search..."
      />
      <View style={styles.icon}>
        <BarcodeIcon />
      </View>
    </View>
  );
};

export default SearchInput;
const styles = StyleSheet.create({
  searchContainer: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 19,
    bottom: 12.5,
  },
});
