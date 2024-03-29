'use client';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface BTNProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

export default function Button({ type, fullWidth, children, onClick, secondary, danger, disabled }: BTNProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        `,
        disabled && 'cursor-default opacity-50',
        fullWidth && 'w-full',
        secondary ? 'text-gray-900' : 'text-white',
        danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600'
      )}
    >
      {children}
    </button>
  );
}
