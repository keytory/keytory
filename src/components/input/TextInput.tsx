'use client';

import React, { ChangeEvent, FC } from 'react';
import { inputBaseStyle } from '@styles/components/input/TextInput.css';

interface TextInputProps {
  id: string;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} style={{ display: 'block' }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={[inputBaseStyle].join(' ')}
      />
    </div>
  );
};

export default TextInput;
