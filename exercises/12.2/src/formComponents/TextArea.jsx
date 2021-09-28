import React from 'react';

class TextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props 
    return (
      <div>
        <textarea value={ value } onChange={ handleChange } name="textarea" id="textarea" cols="30" rows="10"/>
        <label htmlFor="textarea">Digite sua mensagem</label>
      </div>
      
    );
  }
}

export default TextArea;