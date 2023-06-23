'use client';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder: string;
}

export default function Input({ label, id, type, required, placeholder, register, errors, disabled }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-bold leading-6" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder={placeholder}
          className={clsx(
            `form-input block w-full border border-solid border-white/10 bg-zinc-900 p-2 shadow focus:border focus:border-zinc-600/10 focus:bg-zinc-900/10 focus:ring-1 focus:ring-inset focus:ring-zinc-700 sm:rounded-md sm:leading-6`,
            errors[id] && ' focus:ring-red-700',
            disabled && 'cursor-default opacity-50'
          )}
        />
      </div>
    </div>
  );
}
