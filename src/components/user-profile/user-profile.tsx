import UserProfileType from './user-profile.type';

const UserProfile = ({ imgLink, userName }: UserProfileType) => {
  return (
    <div>
      <img
        style={{ maxWidth: '100%', height: 'auto' }}
        src={imgLink}
        alt={userName}
      />
      <p>{userName}</p>
    </div>
  );
};

export default UserProfile;
