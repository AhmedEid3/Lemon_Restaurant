import { PropsWithChildren } from 'react';
import './button.css';

type ButtonProps = React.ComponentProps<'button'>;

interface PropsBase extends PropsWithChildren, ButtonProps {
  onClick?: () => void;
  variant?: 'primary' | 'outlined' | 'none';
  className?: string;
}

const BaseButton = ({ children, className, onClick, ...props }: PropsBase) => {
  return (
    <button className={`btn ${className ?? ''}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

interface Props extends PropsWithChildren, ButtonProps {
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
