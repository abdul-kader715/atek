
import { useState, type FC } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import Vicon from '../../img/icon/play.svg';

interface VideoModalProps {
  vidclass?: string;
  imga?: boolean;
  icona?: boolean;
}

const VideoModal: FC<VideoModalProps> = ({ vidclass = '', imga = false, icona = true }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="pQpFebyALV0?si=gY2PUVXEboO9BLsI" 
        onClose={() => setOpen(false)}
      />

      <div className={vidclass} onClick={() => setOpen(true)} data-type="iframe">
        {icona && <i className="fa-sharp fa-solid fa-play"></i>}
        {imga && <img src={Vicon} alt="" />}
      </div>
    </>
  );
};

export default VideoModal;
