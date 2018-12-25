import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarList from './SidebarList'

// notes={notes}
// selectedNote={selectedNote}
// selectNote={selectNote}
// addNote={addNote}

const Sidebar = (props) => {

    const { notes, selectedNote, selectNote, addNote } = props;

    return(
        <div className="sidebar">
            <SidebarHeader
                addNote={addNote}
            />
            <SidebarList
                notes={notes}
                selectedNote={selectedNote}
                selectNote={selectNote}
            />
        </div>
    )
}

export default Sidebar;