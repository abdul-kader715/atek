import { type FC } from 'react';

interface LetteringProps {
  text?: string;
  method?: 'letters' | 'init' | 'words' | 'lines';
  className?: string;
}

const Lettering: FC<LetteringProps> = ({
  text = '',
  method = 'letters',
  className = '',
}) => {
  const getSpans = () => {
    let parts: string[] = [];
    let delimiter = '';

    switch (method) {
      case 'letters':
      case 'init':
        delimiter = '';
        parts = text.split('');
        break;
      case 'words':
        delimiter = ' ';
        parts = text.split(' ');
        break;
      case 'lines':
        delimiter = '\n';
        parts = text.split('\n');
        break;
      default:
        parts = text.split('');
    }

    return parts.map((part, i) => (
      <span key={i} className={`${method === 'letters' ? 'char' : method}${i + 1}`}>
        {part}
        {delimiter && method === 'words' ? ' ' : ''}
      </span>
    ));
  };

  return <span className={`discount-anime text-white ${className}`}>{getSpans()}</span>;
};

export default Lettering;
