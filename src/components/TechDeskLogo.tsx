import React from 'react';

interface TechDeskLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

export const TechDeskLogo: React.FC<TechDeskLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
}) => {
  const heightClasses = {
    sm: 'h-16 sm:h-20 lg:h-21',
    md: 'h-[87px] sm:h-[96px] lg:h-[111px]',
    lg: 'h-[108px] sm:h-[120px] lg:h-[135px]',
    xl: 'h-[135px] sm:h-[156px]',
  };

  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center select-none ${
        isDark ? 'bg-white px-2.5 py-1 rounded-xl shadow-sm' : ''
      } ${className}`}
    >
      <img
        src="/td.webp"
        alt="TechDesk DZ Logo"
        className={`${heightClasses[size]} w-auto object-contain block`}
        loading="eager"
      />
    </div>
  );
};
