import React from 'react';
import Sidebar from './Sidebar'
import Body from './Body'

const Content = (props) => {

    const {
        addNoteTrue,
        editNoteTrue,
        notes,
        selectedNote,
        selectNote,
        addNote,
        editNote,
        createNote,
        removeNote
    } = props;
    
    // notes={this.state.notes}
    // selectedNote={this.state.selectedNote}
    // selectNote={this.selectNote}
    // addNote={this.addNote}
    // editNote={this.editNote}
    // removeNote={this.removeNote}

    return (
        <div className="content">
            <Sidebar
                notes={notes}
                selectedNote={selectedNote}
                selectNote={selectNote}
                addNote={addNote}
                
            />
            <Body
                addNoteTrue={addNoteTrue}
                editNoteTrue={editNoteTrue}
                notes={notes}
                selectedNote={selectedNote}
                editNote={editNote}
                createNote={createNote}
                removeNote={removeNote}
            />
        </div>
    )
}

export default Content;