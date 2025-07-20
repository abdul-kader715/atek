import React, { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

interface ShapeMockupProps {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  className?: string;
  children?: ReactNode;
}

const ShapeMockup: React.FC<ShapeMockupProps> = ({
  top,
  right,
  bottom,
  left,
  className,
  children
}) => {
  const shapeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shapeRef.current) {
      const parent = shapeRef.current.parentElement;
      if (parent) {
        parent.classList.add('shape-mockup-wrap');
      }
    }
  }, []);

  const style: CSSProperties = {
    top,
    right,
    bottom,
    left,
    position: 'absolute'
  };

  return (
    <div
      ref={shapeRef}
      className={`${className || ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ShapeMockup;
