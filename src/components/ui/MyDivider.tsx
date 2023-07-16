import React from 'react';
import {Divider, useTheme} from 'react-native-paper';

const MyDivider = ({color}: any) => {
  const theme = useTheme();
  return (
    <Divider
      style={{
        backgroundColor: color || theme.colors.surface,
        width: '100%',
        height: 1.5,
        marginVertical: 16,
      }}
    />
  );
};

export default MyDivider;
