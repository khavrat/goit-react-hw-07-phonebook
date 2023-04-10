import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsAsync } from '../redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import { Phonebook, PhonebookTitle, ContactsTitle } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  return (
    <Phonebook>
      <ToastContainer />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <ContactFilter></ContactFilter>

      <ContactList />
    </Phonebook>
  );
}

export default App;
