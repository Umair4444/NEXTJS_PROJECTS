interface GoogleLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function GoogleLogo({ size = 'medium', className = '' }: GoogleLogoProps) {
  const sizeClasses = {
    small: 'text-4xl',
    medium: 'text-6xl md:text-8xl',
    large: 'text-8xl md:text-9xl'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <span className="text-blue-500">G</span>
      <span className="text-red-500">o</span>
      <span className="text-yellow-500">o</span>
      <span className="text-blue-500">g</span>
      <span className="text-green-500">l</span>
      <span className="text-red-500">e</span>
    </div>
  );
}
