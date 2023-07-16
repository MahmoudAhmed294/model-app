import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Appbar, IconButton} from 'react-native-paper';
import {ArrowLeftIcon, EditIcon, TransactionIcon} from '~/components/icons';
import {Text} from '~/components/ui';
import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

const Header = (props: NativeStackHeaderProps) => {
  const {options, route, navigation, back} = props;

  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.IconContainer}>
        <IconButton
          icon={ArrowLeftIcon}
          size={16}
          onPress={navigation.goBack}
          disabled={back ? false : true}
        />
        <Text variant="titleSmall" style={styles.textBelowIcon}>
          Back
        </Text>
      </View>
      <Text variant="titleXLarge" style={styles.title}>
        {title}
      </Text>
      {rightSection[title] || null}
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    elevation: 6,
    shadowColor: '#00000029',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  IconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 68,
  },
  title: {
    flex: 1,
    marginLeft: 8,
  },
  textBelowIcon: {
    marginTop: -8,
  },
});

type IRightSection = {
  [key: string]: JSX.Element | null;
};

const rightSection: IRightSection = {
  Picture: (
    <View style={styles.IconContainer}>
      <IconButton icon={TransactionIcon} size={16} />
      <Text variant="titleSmall" style={styles.textBelowIcon}>
        Process
      </Text>
    </View>
  ),
  ModelDetails: (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        height: 39,
        width: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: '#707070',
        borderStyle: 'solid',
        borderWidth: 1,
        elevation: 4,
        shadowColor: '#000',
        marginRight: 4,
      }}
      disabled>
      <EditIcon />
      <Text variant="headlineMedium" style={{color: '#707070', marginLeft: 5}}>
        Edit
      </Text>
    </TouchableOpacity>
  ),
};
