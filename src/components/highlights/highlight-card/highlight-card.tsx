import deliveryIcon from '../../../assets/delivery_icon.svg';
import Button from '../../button/Button';
import DishType from '../dish.type';
import './highlight-card.css';

const HighlightCard = ({ title, price, imgSrc, description }: DishType) => {
  return (
    <section className="highlight">
      <div className="rounded" style={{ height: '250px' }}>
        <img
          className="rounded"
          style={{ width: '100%', height: '100%' }}
          src={imgSrc}
          alt={title}
        />
      </div>

      <div className="highlight__description">
        <header className="display-flex justify-content-between">
          <h2 className="card-title">{title}</h2>
          <p className="price-text text-accent-dark">${price.toFixed(2)}</p>
        </header>

        <p className="paragraph text-primary">{description}</p>

        <div style={{ marginTop: 'auto' }}>
          <Button variant="none">
            Order a delivery <img src={deliveryIcon} alt="delivery icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HighlightCard;
