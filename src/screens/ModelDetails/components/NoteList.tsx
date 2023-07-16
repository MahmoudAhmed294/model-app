import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NoteItem from '~/components/ui/NoteItem';
import MyDivider from '~/components/ui/MyDivider';
import Box from '~/components/ui/Box';
import {Text} from 'react-native-paper';

type Props = {
  notes: any[];
  newNote: any;
};

const NoteList = ({notes, newNote}: Props) => {
  const [notesList, setNodeList] = useState<any>();

  useEffect(() => {
    setNodeList(notes);
  }, [notes]);

  useEffect(() => {
    if (newNote) {
      setNodeList([...notesList, {id: Math.random(), ...newNote}]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newNote]);

  return (
    <View>
      <Text variant="displayLarge" style={{marginTop: 12}}>
        History Notes
      </Text>
      <Box>
        {notesList?.map(({date, details, id, by}: any) => (
          <View key={id}>
            <NoteItem date={date} descriptions={details} title={by} />
            <MyDivider color={'#EBEBEB'} />
          </View>
        ))}
      </Box>
    </View>
  );
};

export default NoteList;
