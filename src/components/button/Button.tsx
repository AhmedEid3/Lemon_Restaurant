import { PropsWithChildren } from 'react';
import './button.css';

interface PropsBase extends PropsWithChildren {
  onClick?: () => void;
  variant?: 'primary' | 'outlined' | 'none';
  className?: string;
}

const BaseButton = ({ children, className, onClick }: PropsBase) => {
  return (
    <button className={`btn ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

interface Props extends PropsWithChildren {
  onClick?: () => void;
  variant?: 'primary' | 'none';
}

const Button = ({ variant = 'primary', ...props }: Props) => {
  switch (variant) {
    case 'primary':
      return <BaseButton className="btn-primary" {...props} />;
    case 'none':
      return <BaseButton className="btn-none" {...props} />;

    default:
      return <BaseButton className="btn-primary" {...props} />;
  }
};

export default Button;
