import { configureStore, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import images from '../images/profile-pics'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [
            {
                "name" : "alex jonathan",
                "address" : "Riviera State 32/106",
                "job" : "Twitter, Inc.",
                "location": "795 Folsom Ave, Suite 600",
                "city": "San Francisco, CA 94107",
                "phone": "(123) 456-7890",
                "img" : images.alex,
                "title": "Graphic Desinger",
                "id": "1"
           },
            {
                "name" : "janeth carton",
                "address" : "Riviera State 32/106",
                "job" : "Twitter, Inc.",
                "location": "795 Folsom Ave, Suite 600",
                "city": "San Francisco, CA 94107",
                "phone": "(123) 456-7890",
                "img" : images.janeth,
                "title": "CTO",
                "id": "2"
            },
            {
                "name" : "john-smith",
                "address" : "Riviera State 32/106",
                "job" : "Twitter, Inc.",
                "location": "795 Folsom Ave, Suite 600",
                "city": "San Francisco, CA 94107",
                "phone": "(123) 456-7890",
                "img" : images.john,
                "title": "CEO",
                "id": "3"
            },
            {
                "name" : "michael zimber",
                "address" : "Riviera State 32/106",
                "job" : "Twitter, Inc.",
                "location": "795 Folsom Ave, Suite 600",
                "city": "San Francisco, CA 94107",
                "phone": "(123) 456-7890",
                "img" : images.michael,
                "title": "Sales Manager",
                "id": "4"
            },
            {
                "name" : "monica smith",
                "address" : "Riviera State 32/106",
                "job" : "Twitter, Inc.",
                "location": "795 Folsom Ave, Suite 600",
                "city": "San Francisco, CA 94107",
                "phone": "(123) 456-7890",
                "img" : images.monica,
                "title": "Marketing Manager",
                "id": "5"
            },
            {
                "name" : "sandra smith",
                "address" : "Riviera State 32/106",
                "job" : "Twitter, Inc.",
                "location": "795 Folsom Ave, Suite 600",
                "city": "San Francisco, CA 94107",
                "phone": "(123) 456-7890",
                "img" : images.sandra,
                "title": "UI/UX",
                "id": "6"
            },
            {
                "name" : "john-smith",
                "address" : "Riviera State 32/106",
                "job" : "Twitter, Inc.",
                "location": "795 Folsom Ave, Suite 600",
                "city": "San Francisco, CA 94107",
                "phone": "(123) 456-7890",
                "img" : images.john,
                "title": "CEO",
                "id": "7"
            },
            {
                "name" : "alex jonathan",
                "address" : "Riviera State 32/106",
                "job" : "Twitter, Inc.",
                "location": "795 Folsom Ave, Suite 600",
                "city": "San Francisco, CA 94107",
                "phone": "(123) 456-7890",
                "img" : images.alex,
                "title": "Graphic Desinger",
                "id": "8"
           },
        ],
        selectedContact: null,
    },
    reducers: {
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(p => p.id !== action.payload.id);
        },
        saveContact: (state, action) => {
            if (action.payload.id) {
                const contactIdx = state.contacts.findIndex(p => p.id == action.payload.id);
                state.contacts[contactIdx] = action.payload;
            } else {
                const newContact = { ...action.payload, img: images.monica, id: uuidv4() };
                state.contacts = [...state.contacts, newContact];
            }
        },
        setSelectedContact: (state, action) => {
            state.selectedContact = action.payload;
        },
    },
});

export const { deleteContact, saveContact, setSelectedContact } = contactsSlice.actions;

export const store = configureStore({
    reducer: contactsSlice.reducer,
});
