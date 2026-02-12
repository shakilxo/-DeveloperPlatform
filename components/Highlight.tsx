
import React from 'react';

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export const Highlight: React.FC<HighlightProps> = ({ children, className = "" }) => {
  return (
    <span className={`text-[#4ade80] font-medium ${className}`}>
      {`{`}<span className="text-white">{children}</span>{`}`}
    </span>
  );
};
