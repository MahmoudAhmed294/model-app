import {DefaultTheme, configureFonts} from 'react-native-paper';
import colors from './colors';
import fontConfig from './font';

const theme = {
  ...DefaultTheme,
  custom: 'property',

  colors: colors,
  fonts: configureFonts({config: fontConfig}),
};

export default theme;
