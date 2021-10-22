import React from 'react'
import photo from './photo.jpg';
import './profilePhoto.css';

const ProfilePhoto = () => {
    return (
        <div>
         <img className='ph' src= {photo } alt= "mscr" />
        </div>
    )
}

export default ProfilePhoto
