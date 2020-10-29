import React, {PureComponent} from 'react';

class BaseButton extends PureComponent {

    render() {
        console.log("Base Button");
        const {buttonName, onButtonClick} = this.props;
        return (
            <button onClick={onButtonClick} className="btn btn-dark btn-lg float-right">{buttonName}</button>
        )
    }
}

export default BaseButton;
