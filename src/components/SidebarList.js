import React from 'react'

const SidebarList = (props) => {

    const { notes, selectNote } = props;

    if( Object.keys(notes).length === 0 && notes.constructor === Object ){
        return(
            <div className="sidebarList" />
        )
    }

    return (
        <div className="sidebarList">
            <ul>
                {
                    notes.map( note => 
                        <li 
                            key={note._id} 
                            onClick={() => selectNote(note._id)} 
                        >
                            <p>{note.subject}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default SidebarList;