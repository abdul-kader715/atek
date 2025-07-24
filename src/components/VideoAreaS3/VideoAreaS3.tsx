import { type FC } from 'react';
import video_bg from '../../img/bg/video_bg_3.webp';
import VideoModal from '../ModalVideo/ModalVideo';

const VideoAreaS3: FC = () => {
  return (
    <div className="video-1-area space-bottom">
      <div className="container">
        <div
          className="video2-wrapp background-image"
          style={{ backgroundImage: `url(${video_bg})` }}
        >
          <div className="video-box1">
            <VideoModal vidclass={'play-btn style2 popup-video'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAreaS3;
