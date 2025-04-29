'use client';

import React from 'react';

interface KeywordHoverCardProps {
  children: React.ReactNode;
  message: string;
}

export const KeywordHoverCard = ({ children, message }: KeywordHoverCardProps) => {
  return (
    <span className="relative group cursor-pointer">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-md transition-all duration-300 whitespace-nowrap z-10">
        {message}
      </div>
    </span>
  );
};
