import DishType from './dish.type';
import HighlightCard from './highlight-card/highlight-card';
import greekSalad from '../../assets/greek_salad.jpg';
import bruschetta from '../../assets/bruschetta.webp';
import lemonDessert from '../../assets/lemon_dessert.jpg';
import { useState } from 'react';

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
    <section>
      <header>
        <h2>Specials</h2>
        <button>Online Menu</button>
      </header>
      {dishes.map((dish) => (
        <HighlightCard key={dish.title} {...dish} />
      ))}
    </section>
  );
};

export default Highlights;
