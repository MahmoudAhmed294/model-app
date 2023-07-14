import React from 'react';
import {View} from 'react-native';
// import {SvgWithCss} from 'react-native-svg';
import {
  ArrowIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BarcodeIcon,
  EditIcon,
  SaveIcon,
  StockFileIcon,
  TransactionIcon,
  VendorIcon,
} from '~/components/icons';
// import {Text} from '~/components/ui';

const index = () => {
  return (
    <View>
      <ArrowIcon />
      <ArrowLeftIcon />
      <ArrowRightIcon />
      <BarcodeIcon />
      <EditIcon />
      <SaveIcon />
      <StockFileIcon />
      <TransactionIcon />
      <VendorIcon />
    </View>
  );
};

export default index;
