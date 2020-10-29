import React, { PureComponent} from "react";
import Checkbox from "../CheckBox";


class NoteItem extends PureComponent {
    render() {
        console.log("Note Item");
        const {key, taskName, id, checked, handleChange} = this.props;
        return (
            <label key={key}  >
                <Checkbox name={taskName} checked={checked} onChange={handleChange} id={id}/>
                {taskName}
            </label>
        )
    }
}

export default NoteItem
