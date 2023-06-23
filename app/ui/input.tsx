'use client';
import clsx from 'clsx';
import { HTMLInputTypeAttribute, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: HTMLInputTypeAttribute | undefined;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder: string;
}

export default function Input({ label, id, type, required, placeholder, register, errors, disabled }: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div>
      <label className="block text-sm font-bold leading-6" htmlFor={id}>
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          type={isPasswordVisible ? type : undefined}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder={placeholder}
          className={clsx(
            `form-input  block w-full border border-solid border-white/10 bg-zinc-900 p-2 shadow focus:border focus:border-zinc-600/10 focus:bg-zinc-900/10 focus:ring-1 focus:ring-inset focus:ring-zinc-700 sm:rounded-md sm:leading-6`,
            errors[id] && ' focus:ring-red-700',
            disabled && 'cursor-default opacity-50'
          )}
        />
        {id === 'password' && (
          <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
            {id === 'password' && isPasswordVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}



