import React from 'react'

const BodyText = (props) => {

    const { selectedNote } = props;

    if (selectedNote === null) {
        return (
        <div className="bodyText"/>
        )
    }

    return (
        <div className="bodyText">
            <p>{selectedNote.body}</p>
        </div>

    )
}

export default BodyText;