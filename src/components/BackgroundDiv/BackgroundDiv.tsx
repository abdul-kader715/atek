import React, { useEffect, useRef, type CSSProperties, type HTMLAttributes } from 'react';

interface BackgroundDivProps extends HTMLAttributes<HTMLDivElement> {
  maskSrc?: string;
  dataBgSrc?: string;
  className?: string;
  style?: CSSProperties;
}

const BackgroundDiv: React.FC<BackgroundDivProps> = ({
  maskSrc,
  dataBgSrc,
  className = '',
  style = {},
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      if (maskSrc) {
        divRef.current.style.maskImage = `url(${maskSrc})`;
        divRef.current.style.webkitMaskImage = `url(${maskSrc})`;
        divRef.current.classList.add('bg-mask');
      }
      if (dataBgSrc) {
        divRef.current.style.backgroundImage = `url(${dataBgSrc})`;
        divRef.current.classList.add('background-image');
      }
    }
  }, [maskSrc, dataBgSrc]);

  return (
    <div
      ref={divRef}
      className={className}
      style={style}
      {...props}
    />
  );
};

export default BackgroundDiv;
