import './Card.css';
import Images from './images/profile-pics'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContact, deleteContact } from './store'
import BasicModal from './Modal'
import { useEffect } from 'react';

function Card({contact}) {

  let { img, name, address, job, location, city, phone, title, id } = contact;

  const dispatch = useDispatch();

  img = img ? img : Images.monica

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
            <button id="edit_btn" onClick={() => dispatch(setSelectedContact(contact))}>Edit</button>
            <div>&nbsp;</div>
            <button id="del_btn" onClick={() => dispatch(deleteContact(contact))}>Del</button>
        </div>
    </div>
  );
}

export default Card;
