import * as React from 'react'

export interface ButtonProps {
    active?: boolean;
    block?: boolean;
    variant?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'danger'
      | 'warning'
      | 'info'
      | 'dark'
      | 'light'
      | 'link'
      | 'outline-primary'
      | 'outline-secondary'
      | 'outline-success'
      | 'outline-danger'
      | 'outline-warning'
      | 'outline-info'
      | 'outline-dark'
      | 'outline-light';
    size?: 'sm' | 'lg';
    type?: 'button' | 'reset' | 'submit';
    href?: string;
    disabled?: boolean;
  }

export interface ButtonGroupProps {
  title: string
}

declare class ButtonGroup extends React.Component<ButtonGroupProps> {}

declare class Button extends React.Component<ButtonProps> {
  static Group: typeof ButtonGroup
}

export default Button