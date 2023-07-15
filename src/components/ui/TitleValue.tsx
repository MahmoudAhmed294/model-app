import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '.';

type Props = {
  title: string;
  value: string;
};

const TitleValue = (props: Props) => {
  const {title, value} = props;
  return (
    <View style={styles.container}>
      <Text variant="displayLarge">{title}</Text>
      <Text variant="titleMedium">{value}</Text>
    </View>
  );
};

export default TitleValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
