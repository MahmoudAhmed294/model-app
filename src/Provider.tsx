import React from 'react';
import {PaperProvider} from 'react-native-paper';
import theme from './theme';
import {StyleSheet} from 'react-native';
import useLoadData from '~/utils/hooks/useSeed';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Picture from '~/screens/Picture';
import Model from '~/screens/Model';
import ModelDetails from '~/screens/ModelDetails';
import Header from '~/components/ui/Header';
import colors from '~/theme/colors';

type RootStackParamList = {
  Picture: undefined;
  Model: undefined;
  ModelDetails: {modelId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Providers(): JSX.Element {
  useLoadData();

  return (
    <PaperProvider theme={theme}>
      {/* @ts-ignore */}
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="Picture"
          screenOptions={{
            header: (props: NativeStackHeaderProps) => <Header {...props} />,
            contentStyle: styles.container,
          }}>
          <Stack.Screen name="Picture" component={Picture} />
          <Stack.Screen name="Model" component={Model} />
          <Stack.Screen name="ModelDetails" component={ModelDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 11,
    paddingVertical: 20,
    backgroundColor: colors.background,
  },
});

export default Providers;
