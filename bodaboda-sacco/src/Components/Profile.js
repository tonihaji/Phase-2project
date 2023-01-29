import React from 'react';

const Profile = (props) => {
  const { name, age, memberId, image, location, email } = props;

  return (
    <div className="profile-container">
      <img src={image} alt="User Profile" className="profile-image"/>
      <div className="profile-info">
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Member ID: {memberId}</p>
        <p>Location: {location}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default Profile;
