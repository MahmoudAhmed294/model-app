import {Image, ImageProps, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from './text';
import Box from './Box';

type Props = {
  image: ImageProps;
  title?: string;
  modelDetails?: boolean;
};

const ProductCard = (props: Props) => {
  const {image, title, modelDetails} = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.productContainer,
        width: modelDetails ? '75%' : '48%',
        height: modelDetails ? 163 : 114,
      }}>
      <Box center mode="flat">
        <Image source={image} style={styles.image} />
      </Box>
      {title ? <Text variant="titleCard">{title}</Text> : null}
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: '100%', height: '100%'},
});
