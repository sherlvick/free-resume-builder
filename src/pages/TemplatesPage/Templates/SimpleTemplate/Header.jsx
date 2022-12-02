import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const Header = React.memo(({personalDetails}) => {

  return (
    <div className='simple-template-header'>
          <h1 className='simple-template-header__title'>{personalDetails.name}</h1>
          <div className='simple-template-header__personal'>
            <div className='simple-template-header__personal__item'>
            <FontAwesomeIcon icon={faPhone} />
            <p>{personalDetails.mobileNumber}</p>
            </div>
            <div className='simple-template-header__personal__item'>
            <FontAwesomeIcon icon={faEnvelope} />
              <p>{personalDetails.email}</p></div>
            <div className='simple-template-header__personal__item' >
            <FontAwesomeIcon icon={faLocationDot} />
             <p> {`${personalDetails.city}, ${personalDetails.state}, ${personalDetails.pincode}`}</p></div>
          </div>
        </div>
  )
});
