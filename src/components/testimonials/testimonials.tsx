import { useState } from 'react';
import ReviewType from '../review/review.type';
import Review from '../review/review';
import alexanderImg from '../../assets/alexander.jpg';
import darshanImg from '../../assets/darshan.jpg';
import jacksonImg from '../../assets/jackson.jpg';
import mandyImg from '../../assets/mandy.jpg';

const Testimonials = () => {
  const [reviews] = useState<Array<ReviewType>>([
    {
      rating: 4,
      reviewText: 'Very Good restaurant',
      user: { imgLink: alexanderImg, userName: 'Alexander John' },
    },
    {
      rating: 3.5,
      reviewText: 'Good restaurant',
      user: { imgLink: darshanImg, userName: 'Darshan Jemi' },
    },
    {
      rating: 5,
      reviewText: 'Excellent restaurant',
      user: { imgLink: jacksonImg, userName: 'Jackson Mark' },
    },
    {
      rating: 4.3,
      reviewText: 'Very Good restaurant',
      user: { imgLink: mandyImg, userName: 'Laila Mask' },
    },
  ]);

  return (
    <section className="bg-accent-dark py-5 mt-5">
      <div className="container">
        <h2 className="special-title text-center">Testimonials</h2>
        <div className="row justify-content-center">
          {reviews.map((review) => (
            <div
              key={review.user.userName}
              className="col-sm-6 col-md-4 col-lg-3"
            >
              <Review {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
