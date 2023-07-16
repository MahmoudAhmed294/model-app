import {View} from 'react-native';
import React from 'react';
import NavigateButtonList from './components/NavigateButtonList';

const Index = ({navigation}: any) => {
  return (
    <View style={{marginHorizontal: 34, marginTop: 16}}>
      <NavigateButtonList navigation={navigation} />
    </View>
  );
};

export default Index;
