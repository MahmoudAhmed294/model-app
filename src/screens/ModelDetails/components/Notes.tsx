import React, {useState} from 'react';
import {INote} from '~/model';
import MyAccordion from '~/components/ui/MyAccordion';
import AddNote from './AddNote';
import NoteList from './NoteList';
type Props = {
  notes: INote[];
  modelId: number;
};

const Notes = (props: Props) => {
  const {modelId, notes} = props;
  const [newNote, setNewNote] = useState();
  return (
    <MyAccordion title="Notes">
      <AddNote id={modelId} setNewNote={setNewNote} />
      <NoteList notes={notes} newNote={newNote} />
    </MyAccordion>
  );
};

export default Notes;
