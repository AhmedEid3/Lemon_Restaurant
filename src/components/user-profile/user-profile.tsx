import UserProfileType from './user-profile.type';

import './user-profile.css';

const UserProfile = ({ imgLink, userName }: UserProfileType) => {
  return (
    <div className="user-profile">
      <img className="user-profile__image" src={imgLink} alt={userName} />

      <p className="paragraph">{userName}</p>
    </div>
  );
};

export default UserProfile;
