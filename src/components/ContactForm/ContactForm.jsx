import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Label, Input, Button } from './ContactForm.Styled'


class ContactForm extends Component {
    state = {
        name: "",
        number: ""
    };

    handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
    }
    
  handleSubmit = (event) => {
    event.preventDefault();  

    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

        if (name.trim() === "" || number.trim() === "") {
      alert("Please enter a name and number.");
      return;
    }

      this.props.onSubmit(newContact);
      this.reset();
  }
  
  reset = () => {
    this.setState({ name: "", number: "" })
  }
    

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}  
            required
          />
          </label>
          <Label>Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value = { this.state.number }
              onChange = { this.handleChange }
              required
            />
          </Label>
            
        <Button type="submit">Add contact</Button>
    </form>
    )
    }
}
export default ContactForm;