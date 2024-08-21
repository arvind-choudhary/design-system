import * as React from 'react';
import styles from './Button.module.scss';

export interface IButtonProps extends React.ComponentProps<'button'> {}

export function Button ({ children, className, ...buttonProps }: IButtonProps) {
  return (
    <button tabIndex={0} {...buttonProps} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
