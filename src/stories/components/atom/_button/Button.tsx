import React from 'react';
import styles from './Button.module.scss';
import {cva, type VariantProps } from 'class-variance-authority'

const buttonStylesDarkAndLight = cva("", {
  variants: {
    light: {
      primary: [
        styles['button-primary-light']
      ],
      secondary: [
        styles['button-secondary-light']
      ],
      alternative: [
        styles['button-alternative-light']
      ]
    },
    dark: {
      primary: [
        styles['button-primary-dark']
      ],
      secondary: [
        styles['button-secondary-dark']
      ],
      alternative: [
        styles['button-alternative-dark']
      ]
    }
  }
});

const buttonStyles = cva(styles.button, {
  variants: {
    theme: {
      primary: [
        styles['button-primary']
      ],
      secondary: [
        styles['button-secondary']
      ],
      alternative: [
        styles['button-alternative']
      ]
    },
    colorType: {
      light: true,
      dark: true
    },
    disabled: {
      true: [
        styles['button-disabled']
      ]
    }
  },
  defaultVariants: {
    theme: 'alternative',
  }
})

type ButtonStyleProps = VariantProps<typeof buttonStyles>

export interface IButtonProps extends React.ComponentProps<'button'>, Omit<ButtonStyleProps, 'disabled'> {
}

/**
 * A reusable Button component that can be customized with different themes, color types, and states.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the button.
 * @param {string} className - Additional CSS class names to be applied to the button.
 * @param {IButtonProps} buttonProps - Button props, including theme, colorType, and disabled state.
 * @return {JSX.Element} A JSX element representing the Button component.
 */

export function Button ({ children, className = '', theme, colorType, disabled, ...buttonProps }: IButtonProps) {
  return (
    <button tabIndex={0}
      {...buttonProps} 
      className={`${buttonStyles({theme, colorType, disabled})} ${buttonStylesDarkAndLight({ light: colorType === 'light' ? theme : null , dark: colorType === 'dark' ? theme : null })} ${className}`}
      disabled={disabled}  
    >
      {children}
    </button>
  );
}
