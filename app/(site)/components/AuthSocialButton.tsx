import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

export default function AuthSocialButton({ icon: Icon, onClick }: AuthSocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full
        justify-center
        rounded-md
        border-white/10
        bg-zinc-800
        px-4
        py-2
        text-gray-500
        shadow-sm
        ring-1
        ring-inset
        ring-gray-500/30
        hover:bg-gray-600/40
        focus:outline-offset-0
      "
    >
      <Icon />
    </button>
  );
}
