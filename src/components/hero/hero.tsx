import restaurantFood from '../../assets/restaurant_food.jpg';

const Hero = () => {
  return (
    <section>
      <div>
        <header>
          <h2>Little Lemon</h2>
          <p>Chicago</p>
        </header>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>reserve a table</button>
      </div>

      <div>
        <img
          style={{ maxWidth: '100%', height: 'auto' }}
          src={restaurantFood}
          alt="Highlights"
        />
      </div>
    </section>
  );
};

export default Hero;
