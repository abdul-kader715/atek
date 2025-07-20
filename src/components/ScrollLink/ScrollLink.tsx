import React, { type ReactNode, type MouseEvent } from 'react';

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  offset?: number;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ href, children, offset = 10 }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="scroll-wrap">
      {children}
    </a>
  );
};

export default ScrollLink;
