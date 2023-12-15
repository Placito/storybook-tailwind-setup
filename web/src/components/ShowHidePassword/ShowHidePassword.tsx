import { useState } from 'react';

import { PasswordField, TextField } from '@redwoodjs/forms';

import Icon from '../Icon/Icon'

const ShowHidePassword = ({ label, name, ...Rest }) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false)

  const handleClick = () => {
    setIsPasswordShowing((prevValue) => !prevValue)
  }
  return (
    <div className="field relative">
      <label htmlFor={name}>{label}</label>
      {isPasswordShowing ? (
        //text input
        <TextField name={name} placeholder="" {...Rest} />
      ) : (
        // password input
        <PasswordField name={name} placeholder="" {...Rest} />
      )}
      <button className="absolute right-6 top-8" onClick={handleClick}>
        {isPasswordShowing ? (
          <Icon id="eyeOpened" size={32} />
        ) : (
          <Icon id="eyeClosed" size={32} />
        )}
      </button>
    </div>
  )
}

export default ShowHidePassword
