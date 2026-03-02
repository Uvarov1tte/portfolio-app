'use client'

interface ButtonProps {
  onClick: () => void;
}

export default function LightDarkButton({ onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="rounded-full border border-red-800">
      Switch theme
    </button>
  );
}
