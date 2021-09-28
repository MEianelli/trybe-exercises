import React from 'react';
import './forms.css'

class TextInput extends React.Component {
  render() {
    const { value, handleChange, inputName } = this.props 
    return (
      <div>
          <input 
            value={ value } 
            onChange={ handleChange } 
            name={ inputName }
            id={ inputName }
            type="text"
            placeholder={ inputName }
          />
      </div>
    );
  }
}

export default TextInput;