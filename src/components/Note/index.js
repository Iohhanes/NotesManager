import React, {PureComponent} from "react";
import NoteItem from "../NoteItem";
import BaseButton from "../BaseButton";
import mockCheckBoxes from "../../mockCheckBoxes";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

class Note extends PureComponent {

    state = {
        checkedNoteItems: new Map(),
        countOfSuccessful: 0,
        isOpen: false
    };

    handleChange = event => {
        const isChecked = event.target.checked;
        const itemId = event.target.id;
        this.setState(prevState => ({
            checkedNoteItems: prevState.checkedNoteItems.set(itemId, isChecked),
            countOfSuccessful: isChecked ? prevState.countOfSuccessful + 1 : prevState.countOfSuccessful - 1
        }));
    };

    onButtonClick = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        console.log("Note");
        const body = this.state.isOpen && mockCheckBoxes.map(noteItem => (
            <li className="list-group-item">
                <NoteItem handleChange={this.handleChange}
                          taskName={noteItem.taskName}
                          key={noteItem.key}
                          checked={this.state.checkedNoteItems.get(noteItem.id)}
                          id={noteItem.id}/>
            </li>));
        const percentageOfSuccessful = Math.round(this.state.countOfSuccessful / mockCheckBoxes.length * 100);
        return (
            <div className="card">
                <div className="card-header">
                    Note1
                </div>
                <div className="card-body">
                    <ul className="list-group">{body}</ul>
                    <div id="progress-bar">
                        <div id="progress" style={{width: percentageOfSuccessful + "%"}}/>
                    </div>
                    <div id="pct">{percentageOfSuccessful}%</div>
                    <BaseButton buttonName={this.state.isOpen ? "Hide" : "More"} onButtonClick={this.onButtonClick}/>
                </div>
            </div>
        )
    }
}

export default Note;
