import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsAsync } from '../redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import { Phonebook, PhonebookTitle, ContactsTitle } from './App.styled';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  return (
    <Phonebook>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <ContactFilter></ContactFilter>

      <ContactList/>
    </Phonebook>
  );
}

export default App;
