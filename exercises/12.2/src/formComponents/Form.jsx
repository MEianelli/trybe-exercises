import React from 'react';
import TextInput from './TextInput';

class Form extends React.Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      textarea: '',
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    }
    this.campos = Object.keys(this.state);
    this.campos.shift();
  }

  handleChange({ target }){
    const { name, value } = target;
    this.setState( () => ({ [name]: value}));
  }

  render() {  
    return (
      <fieldset className="cv">
        {/* <TextArea value={ this.state.textarea } handleChange={ this.handleChange }/>  */}
        { this.campos.map( campo => (<TextInput 
          key={ campo }
          handleChange={ this.handleChange }
          value={ this.state[campo] }
          inputName={ campo }
        />)) }
      </fieldset>
    )
  }
}

export default Form;