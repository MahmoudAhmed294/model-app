import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '~/components/ui/SearchInput';
import ProductList from './components/ProductList';

const Index = ({navigation}: any) => {
  const [searchResult, setSearchResult] = useState(null);

  return (
    <View style={styles.container}>
      <SearchInput setSearchResult={setSearchResult} />
      <ProductList searchResult={searchResult} navigation={navigation} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 11,
  },
});
