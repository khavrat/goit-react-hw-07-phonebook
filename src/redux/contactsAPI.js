import axios from 'axios';

export async function fetchContacts() {
  const response = await axios.get(
    'https://642fed50b289b1dec4bd44aa.mockapi.io/contacts'
  );
  return response.data;
}

export async function addContact(contact) {
  const response = await axios.get(
    'https://642fed50b289b1dec4bd44aa.mockapi.io/contacts'
  );
  const existingContacts = response.data;

  const existingContact = existingContacts.find(
    item => item.name.toLowerCase() === contact.name.toLowerCase()
  );
  if (existingContact) {
    throw new Error(`${contact.name} already exists`);
  }
  const addResponse = await axios.post(
    'https://642fed50b289b1dec4bd44aa.mockapi.io/contacts',
    contact
  );
  return addResponse.data;
}

export async function removeContact(id) {
  const response = await axios.delete(
    `https://642fed50b289b1dec4bd44aa.mockapi.io/contacts/${id}`
  );
    console.log('id in contactsAPI:>> ', id);
  return response.data;
}
