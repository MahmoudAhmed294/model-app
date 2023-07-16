import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useDatabase from '~/utils/hooks/useDatabase';
import colors from '~/theme/colors';
import ProductCard from '~/components/ui/ProductCard';
import Loader from '~/components/ui/Loader';
import MyDivider from '~/components/ui/MyDivider';
import ImageInfo from './components/ImageInfo';
import Notes from './components/Notes';

const Index = ({route}: any) => {
  const {modelId} = route.params;
  const {getOneItem, isLoading, data} = useDatabase();
  const [productDetails, setProductDetails] = useState<any>();

  useEffect(() => {
    if (modelId) {
      getOneItem(modelId, 'models');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelId]);

  useEffect(() => {
    if (data) {
      setProductDetails(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {isLoading ? (
          <Loader loading={isLoading} />
        ) : (
          <>
            <View style={{alignItems: 'center'}}>
              <ProductCard
                image={productDetails?.model?.imageUrl}
                modelDetails
              />
            </View>
            <MyDivider />
            <ImageInfo {...productDetails?.model} />
            <MyDivider />
            <Notes
              notes={productDetails?.notes}
              modelId={productDetails?.model.id}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonBackground,
    borderRadius: 25,
    flex: 1,
    paddingVertical: 13,
    paddingHorizontal: 16,
    elevation: 4,
  },
});
