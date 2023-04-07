import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import shortid from 'shortid';
import { fetchContacts, addContact } from './contactsAPI';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const data = await fetchContacts();
    return data;
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const data = await addContact(contact);
    return data;
  }
)

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    // addContact: (state, action) => {
    //   const { name, number } = action.payload;
    //   const id = shortid.generate();
    //   const searchedContact = state.contacts.find(
    //     contact =>
    //       contact.name.toLocaleLowerCase() ===
    //       action.payload.name.toLocaleLowerCase()
    //   );
    //   if (searchedContact) {
    //     return alert(`${action.payload.name} is already in contacts`);
    //   } else {
    //     state.contacts.push({ id, name, number });
    //   }
    // },

    removeContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsAsync.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
  },
});

export const { removeContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
// Selectors
export const selectContacts = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;
