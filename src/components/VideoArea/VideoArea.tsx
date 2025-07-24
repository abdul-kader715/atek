import { type FC } from 'react';
import video_bg from '../../img/bg/video_bg_2.webp';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';
import VideoModal from '../ModalVideo/ModalVideo';

const VideoArea: FC = () => {
  return (
    <div className="video-area video-mlr pb-60 overflow-hidden light-bg">
      <div className="container th-container">
        <div
          className="video-box8 position-relative background-image"
          style={{ backgroundImage: `url(${video_bg})` }}
        >
          <div className="video8-circle-text">
            <div className="company-wrapp">
              <VideoModal vidclass={'icon popup-video'} />
              <div className="discount-wrapp">
                <div className="discount-tag">
                  <CircleTextS2 text="Fintec Agency Since In 1996" method="letters" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
