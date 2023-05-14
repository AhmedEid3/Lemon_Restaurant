import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  nStars: number;
}

const Rating = ({ nStars }: Props) => {
  return (
    <div>
      {new Array(nStars).fill('').map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStarSolid} />
      ))}

      {new Array(5 - nStars).fill('').map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStarRegular} />
      ))}
    </div>
  );
};

export default Rating;
