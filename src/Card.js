import './Card.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContact, deleteContact } from './store'
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';


function Card({contact}) {

  let { img, name, address, job, location, city, phone, title, id } = contact;

  const dispatch = useDispatch();

  return (
    <div className="card" id={id}>
        <div className="profile_img_box">
            <img className="profile_img" src={img} alt="logo" />
            <span><strong>{title}</strong></span>
        </div>
        <div className="user_data">
            <span className="user_name">{name}</span>
            <span className="user_address">{address}</span>
            <span className="user_job"><strong>{job}</strong></span>
            <span className="user_location">{location}</span>
            <span className="user_city">{city}</span>
            <span className="user_phone">{phone}</span>
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
