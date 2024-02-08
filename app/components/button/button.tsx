import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  hoverColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, backgroundColor = '#4CAF50', hoverColor = '#45a049' }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    transition: 'background-color 0.3s ease',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const buttonHoverStyle = {
    backgroundColor: hoverColor,
  };

  return (
    <button onClick={onClick} className={styles.button} style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = backgroundColor}>
      {text}
    </button>
  );
};

export default Button;
