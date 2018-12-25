import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../assets/css/styles.css';

import base from '../base';

// Helper funcs
// function clbkHlpr(){console.log('Callback completed!')};

// App Class declaration
class App extends Component {

    constructor(){
        super();

        this.selectNote = this.selectNote.bind(this);
        this.addNote = this.addNote.bind(this);
        this.createNote = this.createNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.removeNote = this.removeNote.bind(this);

        this.authenticate = this.authenticate.bind(this);
        this.authHandler = this.authHandler.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            notes: {},
            isLoading: true,
            addNoteTrue: false,
            editNoteTrue: false,
            selectedNote: null,
            uid: null,
            error: null,
        }
    }

    // Don't need to do this at the start- better in compDidMount
    // componentWillMount(){
    //     this.ref = base.syncState(`knewyousir-notely/notes`, {
    //         context: this,
    //         state: 'notes',
    //     })
    // }

    componentDidMount(){
        this.ref = base.syncState(`knewyousir-notely/notes`, {
            context: this,
            state: 'notes',
            then: function(){this.setState({isLoading: false})},
        })

        base.onAuth( (user) => {
            if (user) {
              this.authHandler(null, { user })
            }
        })
        
        // MongoDB method
        // this.setState({ isLoading: true})
        // fetch('http://localhost:3005/api/notes')
        // .then(response => response.json())
        // .then(notes => this.setState({notes, isLoading: false}))
        // // .then(()=>console.log('async call completed!'))
        // .catch((response) => {console.log(response.statusText)})
    }

    componentWillUnmount(){
        base.removeBinding(this.ref)
    }

    render(){

        const { isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>
        }

        return (
            <div className="App">
                <Header
                    authenticate={this.authenticate}
                    uid={this.state.uid}
                />
                <Content
                    notes={this.state.notes}
                    selectedNote={this.state.selectedNote}
                    selectNote={this.selectNote}
                    addNote={this.addNote}
                    editNote={this.editNote}
                    addNoteTrue={this.state.addNoteTrue}
                    editNoteTrue={this.state.editNoteTrue}
                    createNote={this.createNote}
                    removeNote={this.removeNote}
                />
                <Footer />
            </div>
        )
    }

    createNote(note) {
        // MongoDB method
        // fetch('http://localhost:3005/api/notes', {
        //     method: "POST",
        //     body: JSON.stringify(note),
        //     headers: {'Content-Type': 'application/json'},
        // })
        // .then(response=>response.data)
        // .catch((response) => {console.log(response.statusText)})
        
        var notes = this.state.notes;
        if( Object.keys(notes).length === 0 && notes.constructor === Object ){
            notes = [];
        } else {
            notes = [...this.state.notes];
        };
        notes.push(note);
        this.setState({ notes, addNoteTrue: false });
    }

    selectNote(key){
        const notes = this.state.notes
        const selectedNote = (notes.filter((note) => key === note._id))[0]
        this.setState({ selectedNote, addNoteTrue: false, editNoteTrue: false })
    }

    addNote(){
        if(this.state.addNoteTrue === true){
            this.setState({ addNoteTrue: false, editNoteTrue: false })
            return    
        }
        this.setState({ addNoteTrue: true, editNoteTrue: false })
    }

    editNote(){
        this.setState({ editNoteTrue: true, addNoteTrue: false })
    }

    removeNote(key){
        // MongoDB method
        // fetch(`http://localhost:3005/api/notes/${key}`, {
        //     method: "DELETE",
        //     headers: {'Content-Type': 'application/json'},
        // }).then(response=>response.data)
        // .catch((response) => {console.log(response.statusText)})

        var newNotes = [...this.state.notes];
        newNotes = newNotes.filter((note) => key !== note._id)
        this.setState({ notes: newNotes, selectedNote: null });
    }

    authenticate(provider) {
        base.authWithOAuthPopup(provider, this.authHandler);
    }

    authHandler(err, authData) {
        console.log(authData);
        if (err){
            console.log(err);
            return;
        }

        this.setState({ 
            uid: authData.user.uid
        })
    }

    logout() {
        base.unauth();
        this.setState({ uid: null});
    }

}

export default App;