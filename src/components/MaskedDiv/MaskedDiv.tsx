import { useEffect, useRef, type FC, type HTMLAttributes } from 'react';

interface MaskedDivProps extends HTMLAttributes<HTMLDivElement> {
  maskSrc: string;
  className?: string;
}

const MaskedDiv: FC<MaskedDivProps> = ({ maskSrc, className = '', ...props }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current && maskSrc) {
      divRef.current.style.maskImage = `url(${maskSrc})`;
      divRef.current.style.webkitMaskImage = `url(${maskSrc})`;
      divRef.current.classList.add('bg-mask');
    }
  }, [maskSrc]);

  return (
    <div
      ref={divRef}
      className={className}
      {...props}
    />
  );
};

export default MaskedDiv;
