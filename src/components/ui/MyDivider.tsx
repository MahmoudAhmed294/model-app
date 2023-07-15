import React from 'react';
import {Divider, useTheme} from 'react-native-paper';

const MyDivider = () => {
  const theme = useTheme();
  return <Divider style={{backgroundColor: theme.colors.surface}} />;
};

export default MyDivider;
