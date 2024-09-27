import React from 'react'
import css from '@/styles/ui/Button/Button.module.css'
import { CgSpinner } from "react-icons/cg";
import classNames from 'classnames';

interface ButtonProps {
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  prefix?: React.ReactNode;
  size?: string;
}

const Button = (props: ButtonProps) => {
  const { className, isDisabled, isLoading, size, prefix, children, onClick } = props;

  return (
    <button
      disabled={isDisabled || isLoading}
      onClick={onClick}
      className={classNames(css.baseButton, {
        // Choose the class based on the prop size
        [css.lg]: size === 'lg',
        [css.md]: size === 'md',
        [css.sm]: size === 'sm',
        [css.md]: !size,
      }, className ? className : '')}
    >
      {isLoading ? <CgSpinner className='animate-spin' /> : prefix}
      {children}
    </button>
  )
}

export default Button