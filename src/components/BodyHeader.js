import React, { Component } from 'react'

class BodyHeader extends Component {

    render(){
        if(this.props.selectedNote === null){
            return(
                <div className="bodyHeader">
                    <div className="bodyHeaderLeft"/>
                    <div className="bodyHeaderRight"/>
                </div>
            )
        } else {
            return (
                <div className="bodyHeader">
                    <div className="bodyHeaderLeft">
                        <h2>{this.props.selectedNote.subject}</h2>
                        <h2>&nbsp;-&nbsp;</h2>
                        <h2 className="date">{this.props.selectedNote.created.slice(0,10)}</h2>
                    </div>
                    <div className="bodyHeaderRight">
                        <h2>Edit</h2>
                        <button onClick={()=>this.deleteNote(this.props.selectedNote._id)}>X</button>
                    </div>
                </div>
            )
        }
    }

    deleteNote(e){
        this.props.removeNote(this.props.selectedNote._id)
    }

}

export default BodyHeader;