import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import colors from '~/theme/colors';

type Props = {
  state: string;
  setState: (data: string) => void;
  placeholder: string;
};

const MyInput = (props: Props) => {
  const {setState, state, placeholder} = props;
  return (
    <TextInput
      placeholder={placeholder}
      value={state}
      onChangeText={setState}
      mode="outlined"
      outlineStyle={styles.search}
      contentStyle={styles.fontStyle}
    />
  );
};

export default MyInput;

const styles = StyleSheet.create({
  search: {
    flex: 1,
    width: '100%',
    borderRadius: 30,
    borderColor: 'transparent',
    border: 0,
    height: 49,
    backgroundColor: colors.inputBorder,
    elevation: 4,
    shadowColor: '#4E4E4E',
    paddingRight: 24,
    top: 7.5,
    marginTop: 0,
  },
  fontStyle: {
    fontFamily: 'OpenSans-Italic',
    fontSize: 18,
    lineHeight: 18,
  },
});
