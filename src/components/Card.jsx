import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        border 
        border-gray-200 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`
        p-4 
        border-b 
        border-gray-200 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

const CardContent = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`
        p-4 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

const CardFooter = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`
        p-4 
        border-t 
        border-gray-200 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export { Card, CardHeader, CardContent, CardFooter }