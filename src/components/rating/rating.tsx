interface Props {
  nStars: number;
}

const Rating = ({ nStars }: Props) => {
  return <div> {nStars} </div>;
};

export default Rating;
