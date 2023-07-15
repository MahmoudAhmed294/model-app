import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, IconButton} from 'react-native-paper';
import {ArrowLeftIcon} from '~/components/icons';
import {Text} from '~/components/ui';
type Props = {
  title: string;
  rightSection?: React.JSX.Element;
};
const Header = (props: Props) => {
  const {title, rightSection} = props;

  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.IconContainer}>
        <IconButton icon={ArrowLeftIcon} size={16} />
        <Text variant="titleSmall" style={styles.textBelowIcon}>
          Back
        </Text>
      </View>
      <Text variant="titleXLarge" style={styles.title}>
        {title}
      </Text>
      {rightSection ? rightSection : null}
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

/* 

        <View style={styles.IconContainer}>
          <IconButton icon={TransactionIcon} size={16} />
          <Text variant="titleSmall" style={styles.textBelowIcon}>
            Process
          </Text>
        </View>




*/
