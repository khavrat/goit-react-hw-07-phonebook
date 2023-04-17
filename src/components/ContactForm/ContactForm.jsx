import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactAsync } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';
import { Form, FormInput, FormLabel, FormBtn } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        console.log('input value: error');
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const statusData = await dispatch(addContactAsync({ name, phone }));
      if (statusData.error) {
        toast.error(statusData.payload);
      } else {
        reset();
        toast.success(`${statusData.payload.name} has been added successfully`);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">name</FormLabel>
      <FormInput
        className="input"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
      <FormLabel htmlFor="number">number</FormLabel>
      <FormInput
        className="input"
        type="tel"
        name="number"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        required
      />
      <FormBtn type="submit">add contact</FormBtn>
    </Form>
  );
}

export default ContactForm;
