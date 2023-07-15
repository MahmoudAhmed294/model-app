import {StyleSheet} from 'react-native';
import React from 'react';
import Box from './Box';
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
    <Box>
      <Text variant="headlineSmall" style={styles.color}>
        {title}
      </Text>
      <Text variant="labelSmall" style={styles.color}>
        {new Date(date).toISOString()}
      </Text>
      <Text variant="displaySmall" style={styles.color}>
        {descriptions}
      </Text>
    </Box>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  color: {
    color: colors.onSurface,
  },
});
