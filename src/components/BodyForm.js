import React, { Component } from 'react'

class AddNoteForm extends Component {

    render(){
        return (
            <form className="bodyForm" ref={ (input) => this.noteForm = input } onSubmit={ (e) => this.makeNote(e) }>
                <div className="formHeader">
                    <input ref={ (input) => this.subject = input } type="text" placeholder="Subject" />
                    <button type="submit">Add</button>
                </div>
                <div className="formBody">
                    <textarea ref={ (input) => this.body = input } placeholder="Text" />
                </div>
            </form>
        )
    }

    makeNote(e) {
        e.preventDefault();

        const timestamp = Date.now();
        var today = new Date();
        var yyyy = today.getFullYear();
        var MM = today.getMonth()+1;
        var dd = today.getDate();
        var hh = today.getHours();
        var mm = today.getMinutes();
        var ss = today.getSeconds();
        var ms = today.getMilliseconds();
        var dateVal = yyyy+'-'+MM+'-'+dd+'T'+hh+':'+mm+':'+ss+'.'+ms+'z';

        const note = {
            subject: this.subject.value,
            body: this.body.value,
            created: dateVal,
            _id: `notes-${timestamp}`,
            __v: 0,
        }

        this.props.createNote(note);
        this.noteForm.reset();
    }

}

export default AddNoteForm;