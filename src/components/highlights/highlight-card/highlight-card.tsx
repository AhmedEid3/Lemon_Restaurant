import deliveryIcon from '../../../assets/delivery_icon.svg';
import DishType from '../dish.type';

const HighlightCard = ({ title, price, imgSrc, description }: DishType) => {
  return (
    <section>
      <img
        style={{ maxWidth: '100%', height: 'auto' }}
        src={imgSrc}
        alt={title}
      />
      <div>
        <header>
          <h2>{title}</h2>
          <p>${price.toFixed(2)}</p>
        </header>
        <p>{description}</p>
        <button>
          Order a delivery <img src={deliveryIcon} alt="delivery icon" />
        </button>
      </div>
    </section>
  );
};

export default HighlightCard;
