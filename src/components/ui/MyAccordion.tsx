import {StyleSheet, View} from 'react-native';
import React from 'react';
import {List, useTheme} from 'react-native-paper';
import {ArrowIcon} from '../icons';
import colors from '~/theme/colors';

type Props = {
  title: string;
  children: React.ReactNode;
};

const MyAccordion = (props: Props) => {
  const {children, title} = props;
  const [expanded, setExpanded] = React.useState(true);
  const theme = useTheme();
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title={title}
      // eslint-disable-next-line react-native/no-inline-styles
      titleStyle={{
        marginTop: 0,
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: theme.colors.onSurface,
      }}
      style={styles.accordion}
      descriptionStyle={{}}
      // eslint-disable-next-line react/no-unstable-nested-components
      right={() => (
        <View style={!expanded ? styles.unExpanded : null}>
          <ArrowIcon />
        </View>
      )}
      expanded={expanded}
      onPress={handlePress}>
      <View style={styles.accordionContent}>{children}</View>
    </List.Accordion>
  );
};

export default MyAccordion;

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: colors.buttonBackground,
    paddingHorizontal: 0,
    marginHorizontal: -17,
  },
  accordionContent: {
    marginTop: 13,
    width: '100%',
  },
  unExpanded: {
    transform: [{rotate: '180deg'}],
  },
});
