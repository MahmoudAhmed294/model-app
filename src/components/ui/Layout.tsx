import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return <View>{children}</View>;
};

export default Layout;
