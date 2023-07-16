import {Alert, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '~/components/ui/ProductCard';
import {IProduct} from '~/model';
import MyDivider from '~/components/ui/MyDivider';
import useDatabase from '~/utils/hooks/useDatabase';
import Loader from '~/components/ui/Loader';

const ProductsList = ({searchResult, navigation}: any) => {
  const {getItems, data, isLoading, error} = useDatabase();
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  useEffect(() => {
    getItems('models', ['id', 'name', 'imageUrl']);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      setProductsList(data);
    }
  }, [data]);

  useEffect(() => {
    let hold = data;
    if (hold && !searchResult) {
      setProductsList(hold);
    }
  }, [data, searchResult]);

  useEffect(() => {
    if (searchResult) {
      setProductsList(searchResult);
    }
  }, [searchResult]);

  useEffect(() => {
    if (error) {
      console.log(error?.message);
      Alert.alert(error?.message);
    }
  }, [error]);

  return (
    <View style={styles.productContainer}>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        productsList?.map(({id, imageUrl, name}: IProduct, index: number) => {
          const isLastCard = index === productsList.length - 1;
          const isLastRow = index % 2 === 1;
          return (
            <React.Fragment key={id}>
              <ProductCard
                navigation={navigation}
                image={imageUrl}
                title={name}
                id={id}
              />
              {!isLastRow || isLastCard ? null : <MyDivider />}
            </React.Fragment>
          );
        })
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 31,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 24,
    columnGap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductsList;
