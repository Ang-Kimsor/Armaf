const VideoHero = ({ Vdo }) => {
  return (
    <video
      src={Vdo}
      className="w-full h-full object-cover object-center"
      loop
      autoPlay
      muted
      preload="auto"
      playsInline
    ></video>
  );
};

export default VideoHero;
