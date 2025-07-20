import { type FC } from 'react';
import video_bg from '../../img/bg/video_bg_1.jpg';
import VideoModal from '../ModalVideo/ModalVideo';

const VideoAreaS2: FC = () => {
  return (
    <div className="video-1-area space-bottom">
      <div className="container">
        <div className="title-area video1-titlebox mb-60 text-center">
          <span className="sub-title">Watch Video</span>
          <h2 className="sec-title">
            We help our clients realize their business <br />
            ideas and achieve great results
          </h2>
        </div>
        <div
          className="video-wrapp background-image"
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

export default VideoAreaS2;
