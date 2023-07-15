import {Animated, StyleProp, StyleSheet} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import colors from '~/theme/colors';

type Elevation = 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;

type Props = {
  children: React.ReactNode;
  style?: StyleProp<any>;
  mode?: 'flat' | 'elevated' | undefined;
  elevation?: Elevation | undefined;
  center?: boolean;
};

const Box = (props: Props) => {
  const {children, style, mode, elevation, center} = props;

  return (
    <Surface
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.surface,
        ...style,
        alignItems: !center ? 'flex-start' : 'center',
        justifyContent: !center ? 'flex-start' : 'center',
      }}
      mode={mode}
      elevation={elevation}>
      {children}
    </Surface>
  );
};

export default Box;

const styles = StyleSheet.create({
  surface: {
    padding: 12,
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: 19,
    shadowColor: colors.onSurface,
    elevation: 20,
    shadowOffset: {height: 1, width: 3},
  },
});
