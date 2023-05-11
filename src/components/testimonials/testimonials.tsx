import { useState } from 'react';
import ReviewType from '../review/review.type';
import Review from '../review/review';
import userProfileImg from '../../assets/user-profile.svg';

const Testimonials = () => {
  const [reviews] = useState<Array<ReviewType>>([
    {
      rating: 4,
      reviewText: 'very Good restaurant',
      user: { imgLink: userProfileImg, userName: 'Ahmed Eid' },
    },
    {
      rating: 3.5,
      reviewText: 'Good restaurant',
      user: { imgLink: userProfileImg, userName: 'Dalia Mahmoud' },
    },
    {
      rating: 5,
      reviewText: 'Excellent restaurant',
      user: { imgLink: userProfileImg, userName: 'Eman Eid' },
    },
    {
      rating: 4.3,
      reviewText: 'very Good restaurant',
      user: { imgLink: userProfileImg, userName: 'Dina Mahmoud' },
    },
  ]);

  return (
    <section>
      <h2>Testimonials</h2>
      {reviews.map((review) => (
        <Review key={review.user.userName} {...review} />
      ))}
    </section>
  );
};

export default Testimonials;
