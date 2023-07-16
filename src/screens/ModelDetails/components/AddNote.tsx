import {Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyInput from '~/components/ui/MyInput';
import {SaveIcon} from '~/components/icons';
import {Button} from 'react-native-paper';
import useDatabase from '~/utils/hooks/useDatabase';

type Props = {
  id: number;
  setNewNote: any;
};

const AddNote = ({id, setNewNote}: Props) => {
  const [text, setText] = useState<string>('');
  const {createItem, isLoading, error} = useDatabase();

  const addNote = () => {
    if (id) {
      const note = {
        by: 'Mahmoud',
        model_id: id,
        details: text,
        date: new Date(),
      };
      setNewNote(note);

      createItem(note, 'notes').then(() => {
        setText('');
      });
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert(error.message);
    }
  }, [error]);

  return (
    <View>
      <View style={{alignItems: 'flex-end', marginBottom: -10}}>
        <Button
          icon={SaveIcon}
          mode="text"
          onPress={() => addNote()}
          style={{width: 80, margin: 0, padding: 0}}
          loading={isLoading}>
          Save
        </Button>
      </View>
      <MyInput placeholder="Add a Note..." setState={setText} state={text} />
    </View>
  );
};

export default AddNote;
