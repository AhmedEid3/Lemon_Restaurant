import DishType from './dish.type';
import HighlightCard from './highlight-card/highlight-card';
import greekSalad from '../../assets/greek_salad.jpg';
import bruschetta from '../../assets/bruschetta.webp';
import lemonDessert from '../../assets/lemon_dessert.jpg';
import { useState } from 'react';
import Button from '../button/Button';

const Highlights = () => {
  const [dishes] = useState<Array<DishType>>([
    {
      imgSrc: greekSalad,
      title: 'Greek salad',
      price: 12.99,
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    },
    {
      imgSrc: bruschetta,
      title: 'Bruschetta',
      price: 5.99,
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    },
    {
      imgSrc: lemonDessert,
      title: 'Lemon Dessert',
      price: 5.0,
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ]);

  return (
    <section className="container mt-5 pt-5">
      <header className="my-3 display-flex justify-content-between align-items-center flex-wrap">
        <h2 className="special-title">This Week Specials!</h2>
        <Button>Online Menu</Button>
      </header>

      <div className="row ">
        {dishes.map((dish) => (
          <div key={dish.title} className="col-sm-6 col-md-4 mb-2">
            <HighlightCard {...dish} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
