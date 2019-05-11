
import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Note extends Component {
    state = {
        editable: false
    };

    edit = () => {
        this.setState({ editable: true });
    };

    save = () => {
        let note = ReactDOM.findDOMNode(this.refs.noteText).value;
        this.props.saveChanges(note, this.props.index);
        this.setState({ editable: false });
    };

    remove = () => {
        this.props.removeThis(this.props.index);
    };

    styleClass = () => {
        let __ = this.props.noteID%10;
        return 'bgClass'+__;
    }

    renderNote = () => {
        return (
            <div className="note">
                <label className={this.styleClass()}>{this.props.noteID}</label>
                <p>{this.props.children}</p>
                <div>
                    <button className="btn-edit fa fa-edit" onClick={this.edit} title="ویرایش"></button>
                    <button className="btn-delete fa fa-trash" onClick={this.remove} title="حذف"></button>
                </div>                
            </div>
        )
    };

    renderEditForm = () => {
        return (
            <div className="note">
                <label className={this.styleClass()}>{this.props.noteID}</label>
                <textarea className="form-control" defaultValue={this.props.children} ref="noteText"></textarea>
                <div>
                    <button className="btn-save fa fa-save" onClick={this.save} title="ذخیره"></button>
                </div>                
            </div>
        )
    };

    render() {
        if(!this.state.editable) return this.renderNote();
        else if(this.state.editable) return this.renderEditForm();
    }
}

export default Note;