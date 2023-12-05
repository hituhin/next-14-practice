// components/Card.tsx

import Image from 'next/image';
import React, { CSSProperties, ReactNode } from 'react';

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  style?: CSSProperties ;
  children?: ReactNode;
};

const Card: React.FC<CardProps> = ({ imageSrc, title, description, style, children }) => {
  return (
    <div style={style} className="bg-white p-6 rounded-lg shadow-md">
      <Image src={imageSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {children}
    </div>
  );
};

export default Card;
