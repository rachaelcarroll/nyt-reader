import React from 'react';
import { NavLink } from 'react-router-dom';

export const Error = ({ message }) => {
  return (
    <>
      <p>{message}</p>
          <NavLink to='/' className='error-home'>
            <button className='return-home'>Return Home</button>
          </NavLink>
    </>
)};