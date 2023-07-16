import {
  Image,
  ImageURISource,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text} from './text';
import Box from './Box';

type Props = {
  image: string;
  title?: string;
  modelDetails?: boolean;
  id?: number;
  navigation?: any;
};
const listOfImage: any = {
  product1: require('../../assets/images/product1.png'),
  product2: require('../../assets/images/product2.png'),
  product3: require('../../assets/images/product3.png'),
  product4: require('../../assets/images/product4.png'),
  noImage: require('../../assets/images/no-image.jpg'),
};

const ProductCard = (props: Props) => {
  const {image, title, modelDetails, navigation, id} = props;
  const [displayImage, setDisplayImage] = useState<ImageURISource>();

  useEffect(() => {
    if (image) {
      setDisplayImage(listOfImage[image]);
    }
  }, [image]);

  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.productContainer,
        width: modelDetails ? '75%' : '48%',
        height: modelDetails ? 163 : 114,
        padding: modelDetails ? 15 : 0,
      }}
      disabled={modelDetails}
      onPress={() => navigation.navigate('ModelDetails', {modelId: id})}
      activeOpacity={0.8}>
      <Box center mode="flat">
        <Image
          source={displayImage || listOfImage.noImage}
          style={styles.image}
        />
      </Box>

      {title ? <Text variant="titleCard">{title}</Text> : null}
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: '100%', height: '100%'},
});
