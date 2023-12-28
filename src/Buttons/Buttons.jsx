import React from 'react';
import './buttons.css'

export const AddBtn = ({ onClick, children }) => (
  <button onClick={onClick} className='add-button'>
    {children}
  </button>

);

export const DeleteBtn = ({ onClick, children }) => (
  <button onClick={onClick} className='delete-button'>
    {children}
  </button>
);

export const SuccessBtn = ({ onClick, children }) => (
  <button onClick={onClick} className='success-button'>
    {children}
  </button>
);

export const ClearBtn = ({ onClick, children }) => (
  <button onClick={onClick} className='empty-button'>
    {children}
  </button>
);