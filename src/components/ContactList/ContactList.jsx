import {
  ContactSet,
  ContactElement,
  ContactElSpan,
  ContactBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  removeContactAsync,
  selectFilter,
} from '../../redux/contactsSlice';
import { toast } from 'react-toastify';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onDeleteContact = async id => {
    const deletedContact = contacts.find(contact => contact.id === id);
    try {
      await dispatch(removeContactAsync(id));
      toast.info(`🚀 ${deletedContact.name} has been deleted successfully`, {
        delay: 250,
      });
    } catch (error) {
      toast.error(
        `Could not remove contact${deletedContact.name}`
      );
    }
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return Array.isArray(contacts)
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : [];
  };
  const contactsList = visibleContacts();

  return (
    <ContactSet>
      {contactsList.map(visibleContact => (
        <ContactElement key={visibleContact.id}>
          <ContactElSpan>{visibleContact.name}:</ContactElSpan>
          <ContactElSpan>{visibleContact.phone}</ContactElSpan>
          <ContactBtn
            type="button"
            onClick={() => onDeleteContact(visibleContact.id)}
          >
              delete
          </ContactBtn>
        </ContactElement>
      ))}
    </ContactSet>
  );
}

export default ContactList;
