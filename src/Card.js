import './Card.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContact, deleteContact } from './store'
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';


function Card({contact}) {

  let { img, name, address, job, location, city, phone, title, id } = contact;
  const [coords, setCoords] = useState({})
  const KEY = "AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8" // can be env var

  const dispatch = useDispatch();

  useEffect(() => {
    const getApiData = async () => {
        // currently hard coded paris, can change to city if this API would work
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=${KEY}`)
        .then((response) => response.json())
        if(response.error_message) {
            setCoords({lat: "N/A", long: "N/A"});
        } else {
            //RESULTS > GEOMETRY > LOCATION and display the "lat" and "long" on the contact.
            const location = response?.GEOMETRY?.LOCATION || {};
            setCoords(location);
        }
    };
    getApiData();
  },[])

  return (
    <div className="card" id={id}>
        <div className="profile_img_box">
            <img className="profile_img" src={img} alt="logo" />
            <span><strong>{title}</strong></span>
        </div>
        <div className="user_data">
            <span className="user_data_field">{name}</span>
            <span className="user_data_field">{address}</span>
            <span className="user_data_field"><strong>{job}</strong></span>
            <span className="user_data_field">{location}</span>
            <span className="user_data_field">{city}</span>
            <span className="user_data_field">{phone}</span>
            <span className='user_data_field'>lat: {coords.lat} lon: {coords.long}</span>
        </div>
        <div className="user_actions">
            <IconButton aria-label="delete">
                <DeleteIcon onClick={() => dispatch(deleteContact(contact))}/>
            </IconButton>
            <IconButton aria-label="edit">
                <CreateIcon onClick={() => dispatch(setSelectedContact(contact))}/>
            </IconButton>
        </div>
    </div>
  );
}

export default Card;
