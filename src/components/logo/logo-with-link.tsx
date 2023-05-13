import { useNavigate } from 'react-router-dom';
import Logo from './logo';

interface Props {
  link: string;
}

const LogoWithLink = ({ link }: Props) => {
  const navigate = useNavigate();

  const handleOpenLick = () => {
    navigate(link);
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onKeyDown={handleOpenLick}
      onClick={handleOpenLick}
    >
      <Logo />
    </div>
  );
};

export default LogoWithLink;
