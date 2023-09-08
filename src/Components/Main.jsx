import StartNotes from "./StartNotes";
import SaveNotes from "./SaveNotes";
/* eslint-disable react/prop-types */
const Main = (props) => {
    const { startNotes, textAreaRef, date, addNotes, addNote, deleteNote } = props;
    return (
        <div className='block__four p-2'>
            <StartNotes startNotes={startNotes} textAreaRef={textAreaRef} date={date} addNote={addNote} />
            <SaveNotes addNotes={addNotes} date={date} deleteNote={deleteNote} />
        </div>
    );
};

export default Main;
