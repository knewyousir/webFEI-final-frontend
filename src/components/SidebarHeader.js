import React from 'react';

// addNote={addNote}

const SidebarHeader = (props) => {

    const { addNote } = props;

    return (
        <div className="sidebarHeader">
            <h2>Notes</h2>
            <h2 
                onClick={addNote}
            >+</h2>
        </div>
    )
}

export default SidebarHeader;