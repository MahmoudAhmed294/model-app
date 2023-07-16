import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import colors from '~/theme/colors';

type Props = {
  title: string;
  date: Date;
  descriptions: string;
};

const NoteItem = (props: Props) => {
  const {date, descriptions, title} = props;
  return (
    <View>
      <Text variant="headlineSmall" style={styles.color}>
        {title}
      </Text>
      <Text variant="labelSmall" style={styles.color}>
        {new Date(date).toISOString()}
      </Text>
      <Text variant="displaySmall" style={styles.color}>
        {descriptions}
      </Text>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  color: {
    color: colors.onSurface,
  },
});
