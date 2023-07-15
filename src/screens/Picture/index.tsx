import React from 'react';
import {View} from 'react-native';
import MyDivider from '~/components/ui/MyDivider';
import Header from '~/components/ui/Header';
import TitleValue from '~/components/ui/TitleValue';
import Box from '~/components/ui/Box';
import {Text} from '~/components/ui/text';
import ProductCard from '~/components/ui/ProductCard';
import NoteItem from '~/components/ui/NoteItem';
const Index = () => {
  return (
    <View style={{backgroundColor: '#F4F4F4'}}>
      <Header title="Picture" />
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 50,
        }}>
        <NoteItem />
        <MyDivider />
      </View>
    </View>
  );
};

export default Index;
