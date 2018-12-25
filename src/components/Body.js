import React from 'react'
import BodyHeader from './BodyHeader'
import BodyText from './BodyText'
import BodyForm from './BodyForm'

// notes={notes}
// selectedNote={selectNote}
// editNote={editNote}
// removeNote={removeNote}

const Body = (props) => {

    const { 
        notes,
        addNoteTrue,
        editNoteTrue,
        selectedNote,
        editNote,
        createNote,
        removeNote
    } = props;

    if (addNoteTrue === true) {
        return (
            <div className="body">
                <BodyForm
                    notes={notes}
                    createNote={createNote}
                    selectedNote={selectedNote}
                /> 
            </div>
        )
    }

    if (editNoteTrue === true) {
        return (
            <div className="body">
                <BodyHeader
                    selectedNote={selectedNote}
                    addNoteTrue={addNoteTrue}
                    editNoteTrue={editNoteTrue}
                    editNote={editNote}
                    removeNote={removeNote}
                />
                <BodyForm
                    // changeNote={changeNote}
                    selectedNote={selectedNote}
                />
            </div>
        )
    }

    return (
        <div className="body">
            <BodyHeader
                notes={notes}
                selectedNote={selectedNote}
                addNoteTrue={addNoteTrue}
                editNoteTrue={editNoteTrue}
                editNote={editNote}
                removeNote={removeNote}
            />
            <BodyText
                selectedNote={selectedNote}
            />
        </div>
    )
}

export default Body