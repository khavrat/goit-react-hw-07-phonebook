import axios from 'axios';

export async function fetchContacts(){
    const response = await axios.get('https://642fed50b289b1dec4bd44aa.mockapi.io/contacts')
    return response.data;
}

export async function addContact(contact) {
  const response = await axios.post(
    'https://642fed50b289b1dec4bd44aa.mockapi.io/contacts', contact
  );
  return response.data;
}
