import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from '../icons/ArrowRightIcon';
import colors from '../../theme/colors';
import {Text} from './text';

type Props = {
  title: string;
  icon: React.JSX.Element;
};

const NavigateButton = (props: Props) => {
  const {icon, title} = props;

  return (
    <TouchableHighlight style={styles.button}>
      <View style={styles.buttonContainer}>
        <View style={styles.leftSection}>
          {icon}
          <Text variant="titleXLarge" style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <ArrowRightIcon />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default NavigateButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBackground,
    borderRadius: 50,
    marginHorizontal: 12,
    marginTop: 24,
    height: 49,
    elevation: 6,
    shadowColor: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 23,
    paddingVertical: 12,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    marginLeft: 12,
  },
  rightSection: {},
});
