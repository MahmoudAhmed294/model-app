import {StyleSheet, View} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import {ArrowIcon} from '../icons';

type Props = {
  titleDown?: boolean;
  children: React.ReactNode;
};

const MyAccordion = (props: Props) => {
  const {titleDown, children} = props;
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title="Controlled Accordion"
      // eslint-disable-next-line react-native/no-inline-styles
      titleStyle={{marginTop: expanded && titleDown ? 16 : 0}}
      style={styles.accordion}
      descriptionStyle={styles.accordion}
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
    backgroundColor: 'transparent',
  },
  accordionContent: {
    marginTop: 13,
  },
  unExpanded: {
    transform: [{rotate: '180deg'}],
  },
});
