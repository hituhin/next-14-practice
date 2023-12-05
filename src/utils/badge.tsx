import React, { ReactNode } from 'react';

type BadgeProps = {
  variant?: string;
  size?: string;
  children?: ReactNode;
};

const SIZE_MAPS: Record<string, string> = {
  small: 'px-2.5 text-xs',
  large: 'px-3 text-sm',
};

const VARIANT_MAPS: Record<string, string> = {
  error: 'bg-red-100 text-red-800',
  note: 'bg-yellow-100 text-yellow-800',
  success: 'bg-green-100 text-green-800',
  info: 'bg-blue-100 text-blue-800',
};

const Badge = (props:BadgeProps) => {  
    const {children ,variant,size} =props;
  const badgeLayoutClasses =
    'inline-flex items-center px-2 py-1 rounded-full font-medium leading-none';
  const finalBadgeClasses = `${badgeLayoutClasses} ${VARIANT_MAPS[variant]} ${SIZE_MAPS[size]}`;
  return <span className={finalBadgeClasses}>{children}</span>;
};

export default Badge;
