// packages/ui/button.js
import React from 'react';
import './button.css';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'danger'
  size = 'medium',    // 'small', 'medium', 'large'
  disabled = false,
  onClick,
  type = 'button'
}) => {
  const className = [
    'go-hawq-btn',
    `go-hawq-btn--${variant}`,
    `go-hawq-btn--${size}`,
    disabled ? 'go-hawq-btn--disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};