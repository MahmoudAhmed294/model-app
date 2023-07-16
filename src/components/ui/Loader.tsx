import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

type Props = {
  loading: boolean;
};

const Loader = ({loading}: Props) => {
  const theme = useTheme();

  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
          }}>
          <ActivityIndicator
            animating={loading}
            color={theme.colors.onSurface}
          />
        </View>
      ) : null}
    </>
  );
};

export default Loader;
