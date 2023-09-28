import React from 'react';

interface VideoBoxProps {
  videoUrl: string;
}

const VideoBox = ({ videoUrl }: VideoBoxProps) => {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="relative max-h-96 overflow-hidden"> 
        <iframe
          src={videoUrl}
          className="w-full h-full aspect-w-16 aspect-h-9"
          title="Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBox;
