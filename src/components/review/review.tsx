import Rating from '../rating/rating';
import UserProfile from '../user-profile/user-profile';
import ReviewType from './review.type';

const Review = ({ rating, user, reviewText }: ReviewType) => {
  return (
    <div>
      <Rating nStars={rating} />
      <UserProfile {...user} />
      <p>{reviewText}</p>
    </div>
  );
};

export default Review;
