import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ModalVideo from 'react-modal-video';

const VideoModal = ({ isVideoOpen, setIsVideoOpen, videoId }) => {
  return (
    <ModalVideo 
      channel='youtube' 
      autoplay 
      isOpen={isVideoOpen} 
      videoId={videoId} 
      onClose={() => setIsVideoOpen(false)} 
    />
  );
};

// Add PropTypes validation
VideoModal.propTypes = {
  isVideoOpen: PropTypes.bool.isRequired,        // Ensure isVideoOpen is a boolean and required
  setIsVideoOpen: PropTypes.func.isRequired,     // Ensure setIsVideoOpen is a function and required
  videoId: PropTypes.string.isRequired,          // Ensure videoId is a string and required
};

export default VideoModal;
