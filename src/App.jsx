import { useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import CreateBox from "./Components/CreateBox";
import Main from "./Components/Main";

function App() {
    const retrievedData = localStorage.getItem("notesData");
    const retrievedNotes = JSON.parse(retrievedData);
    const retrievedModeData = localStorage.getItem("mode");
    const retrievedMode = JSON.parse(retrievedModeData);
    // eslint-disable-next-line no-unused-vars
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [isSearchBox, setIsSearchBox] = useState(false);
    const [isCreateBox, setIsCreateBox] = useState(false);
    const [addNotes, setAddNotes] = useState(retrievedNotes);
    const [startNotes, setStartNotes] = useState();
    const [allNotes, setAllNotes] = useState(retrievedNotes);
    const [mode, setMode] = useState(retrievedMode);
    const textAreaRef = useRef(null);

    const handleSearchBox = () => {
        setIsSearchBox(!isSearchBox);
    };
    const handleCreateBox = () => {
        setIsCreateBox(!isCreateBox);
    };

    const addNote = () => {
        const noteColor = startNotes.color;
        const areaText = textAreaRef.current.value;
        if (areaText === "") {
            return;
        }
        setStartNotes(null);

        setAddNotes([
            ...addNotes,
            {
                color: noteColor,
                text: areaText,
                date,
            },
        ]);
        setAllNotes([
            ...addNotes,
            {
                color: noteColor,
                text: areaText,
                date,
            },
        ]);
        localStorage.setItem(
            "notesData",
            JSON.stringify([
                ...addNotes,
                {
                    color: noteColor,
                    text: areaText,
                    date,
                },
            ])
        );
    };
    const firstNotes = (color) => {
        setStartNotes({ color: color });
    };
    const deleteNote = (Notetext) => {
        const res = addNotes.filter((el) => el.text !== Notetext);
        setAddNotes(res);
        const updatedAllNotes = allNotes.filter((el) => el.text !== Notetext);
        localStorage.setItem("notesData", JSON.stringify(updatedAllNotes));
        setAllNotes(updatedAllNotes);
    };
    const onlyColor = (noteColor) => {
        const only = allNotes.filter((el) => el.color === noteColor);
        setAddNotes(only);
    };
    const allColor = () => {
        setAddNotes(allNotes);
    };
    const modeOn = () => {
        setMode(!mode);
        localStorage.setItem("mode", JSON.stringify(!mode));
    };
    return (
        <div className='wrapper container max-w-3xl mx-auto my-6'>
            <div className='block__box rounded-2xl p-5' style={{ background: mode ? "#191d48" : "#bbbbc3" }}>
                <Header modeOn={modeOn} />
                <SearchBox isSearchBox={isSearchBox} allColor={allColor} onlyColor={onlyColor} handleSearchBox={handleSearchBox} />
                <CreateBox handleCreateBox={handleCreateBox} isCreateBox={isCreateBox} firstNotes={firstNotes} />
                <Main startNotes={startNotes} textAreaRef={textAreaRef} date={date} addNotes={addNotes} addNote={addNote} deleteNote={deleteNote} />
            </div>
        </div>
    );
}

export default App;
