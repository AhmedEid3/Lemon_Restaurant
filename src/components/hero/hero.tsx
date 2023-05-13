import restaurantFood from '../../assets/restaurant_food.jpg';
import Button from '../button/Button';
import './hero.css';

const Hero = () => {
  return (
    <section className="bg-primary pt-2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-lg-4">
            <header>
              <h1 className="heading text-secondary">Little Lemon</h1>
              <p className="subtitle text-light">Chicago</p>
            </header>
            <p className="lead text-light">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div className="mt-5">
              <Button>Reserve a Table</Button>
            </div>
          </div>

          <div className="col-auto">
            <div className="container-img rounded">
              <img
                className="img-fluid rounded"
                src={restaurantFood}
                alt="Highlights"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
