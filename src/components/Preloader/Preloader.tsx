import { useEffect, useState, type FC } from 'react';
import logoIcon from '../../img/logo-icon3.svg';

const Preloader: FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setVisible(false), 300);
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader">
      <button className="th-btn preloaderCls" onClick={() => setVisible(false)}>
        Cancel Preloader
      </button>
      <div className="preloader-inner">
        <img src={logoIcon} alt="img" />
        <span className="loader">
          Atek
          <span className="loading-text">Atek</span>
        </span>
      </div>
    </div>
  );
};

export default Preloader;


