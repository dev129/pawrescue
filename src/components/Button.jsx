import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  onClick,
  ...props
}) => {
  const variants = {
    default: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border border-primary text-primary hover:bg-primary-light',
    ghost: 'hover:bg-gray-100',
    link: 'text-primary underline'
  }

  const sizes = {
    default: 'px-4 py-2 text-base',
    sm: 'px-3 py-1 text-sm',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2 rounded-full'
  }

  return (
    <button
      className={`
        rounded-md 
        transition-all 
        duration-300 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outline', 'ghost', 'link']),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;