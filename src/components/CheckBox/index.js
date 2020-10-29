import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({type = 'checkbox', name, checked = false, onChange, id}) => (
    <input type={type} name={name} checked={checked} onChange={onChange} id={id}/>
);

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Checkbox;
