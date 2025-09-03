import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ 
  className = '', 
  label,
  error,
  ...props 
}: InputProps) {
  const classes = [
    'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm',
    'ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
    'disabled:opacity-50',
    error ? 'border-red-500 focus-visible:ring-red-500' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className="w-full">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
          {label}
        </label>
      )}
      <input
        className={classes}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
}