import './ContactsMainScreen.css';
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContact } from './store'
import BasicModal from './Modal' 

function ContactsMainScreen() {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const selected = useSelector(state => state.selectedContact);

  console.log("contacts", contacts);

  function drawCards() {
    return (contacts || []).map(function(contact, idx) {
      return (<Card key={idx} contact={contact}></Card>)
    })
  }

  return (
    <>
    <div className='add_contact' onClick={() => dispatch(setSelectedContact(true))}>Add Contact(+)</div>
    <div className="ContactsMainScreen">
      {drawCards()}
      {selected && <BasicModal />}
    </div>
    </>
  );
}

export default ContactsMainScreen;
