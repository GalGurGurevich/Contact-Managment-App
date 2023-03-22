import './ContactsMainScreen.css';
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContact } from '../redux/store'
import BasicModal from '../components/Modal' 

function ContactsMainScreen() {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const selected = useSelector(state => state.selectedContact);

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
