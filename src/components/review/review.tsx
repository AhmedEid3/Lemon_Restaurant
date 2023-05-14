import Rating from '../rating/rating';
import UserProfile from '../user-profile/user-profile';
import ReviewType from './review.type';

const Review = ({ rating, user, reviewText }: ReviewType) => {
  return (
    <div>
      <div className="mb-2">
        <Rating nStars={rating} />
      </div>
      <UserProfile {...user} />
      <p className="paragraph">{reviewText}</p>
    </div>
  );
};

export default Review;
