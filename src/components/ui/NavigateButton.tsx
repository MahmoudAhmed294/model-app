import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ArrowRightIcon} from '../icons/ArrowRightIcon';
import colors from '../../theme/colors';
import {Text} from './text';

type Props = {
  title: string;
  icon: React.ReactNode;
  to: string | null;
  navigation: any;
};

const NavigateButton = (props: Props) => {
  const {icon, title, navigation, to} = props;
  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  return (
    <TouchableOpacity
      style={[styles.button, isHovered && styles.buttonHoverBackground]}
      disabled={!to}
      activeOpacity={1}
      onPress={() => navigation.navigate(to)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <View style={styles.buttonContainer}>
        <View style={styles.leftSection}>
          {icon}
          <Text variant="titleXLarge" style={styles.title}>
            {title}
          </Text>
        </View>
        <View>
          <ArrowRightIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NavigateButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonBackground,
    borderRadius: 50,
    marginHorizontal: 12,
    marginBottom: 28,
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
  buttonHoverBackground: {
    backgroundColor: colors.buttonHover,
    borderRadius: 50,
    marginHorizontal: 12,
    marginBottom: 28,
    height: 49,
    elevation: 6,
    shadowColor: '#333',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    marginLeft: 12,
  },
});
