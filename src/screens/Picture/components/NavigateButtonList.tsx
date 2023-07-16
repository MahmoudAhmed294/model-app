import {View} from 'react-native';
import React from 'react';
import NavigateButton from '~/components/ui/NavigateButton';
import {StockFileIcon, VendorIcon} from '~/components/icons';

const screens = [
  {
    title: 'Asset Inventory',
    icon: <StockFileIcon />,
    to: null,
  },
  {
    title: 'Model',
    icon: <VendorIcon />,
    to: 'Model',
  },
  {
    title: 'Person',
    icon: <VendorIcon />,
    to: null,
  },
];

const NavigateButtonList = ({navigation}: any) => {
  return (
    <View>
      {screens.map(({icon, title, to}) => (
        <NavigateButton
          icon={icon}
          to={to}
          title={title}
          navigation={navigation}
          key={title}
        />
      ))}
    </View>
  );
};

export default NavigateButtonList;
