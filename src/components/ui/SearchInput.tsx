import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {BarcodeIcon} from '../icons';
import MyInput from './MyInput';
import useDatabase from '~/utils/hooks/useDatabase';

type Props = {
  setSearchResult: any;
};

const SearchInput = ({setSearchResult}: Props) => {
  const {search, error, data} = useDatabase();
  const [text, setText] = useState('');

  useEffect(() => {
    if (text !== '') {
      search('models', 'name', text);
    } else {
      setSearchResult(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    if (error) {
      Alert.alert(error.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    setSearchResult(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setSearchResult]);

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
